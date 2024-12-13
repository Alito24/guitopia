import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

// Simplified unlock condition handler
const defaultUnlockCondition = (resources) => true;

// Resource management system
const INITIAL_RESOURCES = {
  'Dirt': { 
    id: 'dirt', 
    displayName: 'Dirt', 
    image: '/api/placeholder/50/50', 
    unlockCondition: defaultUnlockCondition
  },
  'Dirt Mound': { 
    id: 'dirt-mound', 
    displayName: 'Dirt Mound', 
    image: '/api/placeholder/50/50', 
    unlockCondition: (resources) => (resources['Dirt']?.amount || 0) >= 3
  }
};

// Block management system
const INITIAL_BLOCKS = {
  'Dirt Block': {
    id: 'dirt-block',
    displayName: 'Dirt',
    image: '/api/placeholder/50/50',
    resourceGained: 'Dirt',
    breakTime: 1,
    resourceAmount: 1,
    unlockCondition: defaultUnlockCondition
  }
};

// Crafting recipes management system
const INITIAL_RECIPES = {
  'Dirt Mound Recipe': {
    id: 'dirt-mound-recipe',
    displayName: 'Dirt Mound',
    image: '/api/placeholder/50/50',
    ingredients: [{ resource: 'Dirt', amount: 3 }],
    outputResource: 'Dirt Mound',
    outputAmount: 1,
    unlockCondition: (resources) => (resources['Dirt']?.amount || 0) >= 3
  }
};

const ResourceGatheringGame = () => {
  // State management for resources, blocks, and recipes
  const [resources, setResources] = useState(() => {
    // Attempt to load from localStorage with fallback
    try {
      const savedResources = localStorage.getItem('game-resources');
      if (savedResources) {
        const parsedResources = JSON.parse(savedResources);
        
        // Reconstruct resources with default unlock conditions
        return Object.fromEntries(
          Object.entries(parsedResources).map(([key, resource]) => [
            key, 
            {
              ...resource,
              // Restore unlock condition or use default
              unlockCondition: resource.unlockCondition 
                ? new Function('return ' + resource.unlockCondition)() 
                : defaultUnlockCondition
            }
          ])
        );
      }
    } catch (error) {
      console.error('Error loading resources:', error);
    }
    
    // Fallback to initial resources if loading fails
    return Object.fromEntries(
      Object.entries(INITIAL_RESOURCES).map(([key, resource]) => [
        key, 
        { ...resource, amount: 0 }
      ])
    );
  });

  const [blocks, setBlocks] = useState(INITIAL_BLOCKS);
  const [recipes, setRecipes] = useState(INITIAL_RECIPES);
  
  // New state to track block breaking progress
  const [blockBreakingProgress, setBlockBreakingProgress] = useState({});

  // Save resources to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('game-resources', JSON.stringify(
        resources, 
        (key, value) => {
          // Special handling for unlock conditions
          if (key === 'unlockCondition') {
            return value.toString();
          }
          return value;
        }
      ));
    } catch (error) {
      console.error('Error saving resources:', error);
    }
  }, [resources]);

  // Resource gathering function
  const gatherResource = (blockId) => {
    const block = Object.values(blocks).find(b => b.id === blockId);
    
    // Check if block is already being broken
    if (blockBreakingProgress[blockId]) return;

    if (block) {
      // Start breaking progress
      setBlockBreakingProgress(prev => ({ 
        ...prev, 
        [blockId]: { progress: 0, startTime: Date.now() } 
      }));

      // Create interval to update progress
      const breakInterval = setInterval(() => {
        setBlockBreakingProgress(prev => {
          const currentProgress = prev[blockId];
          const elapsedTime = (Date.now() - currentProgress.startTime) / 1000;
          const progressPercentage = Math.min(100, (elapsedTime / block.breakTime) * 100);

          // If breaking is complete
          if (progressPercentage >= 100) {
            clearInterval(breakInterval);
            
            // Add resource
            setResources(prevResources => ({
              ...prevResources,
              [block.resourceGained]: {
                ...prevResources[block.resourceGained],
                amount: (prevResources[block.resourceGained]?.amount || 0) + block.resourceAmount
              }
            }));

            // Remove progress tracking
            const { [blockId]: removedProgress, ...remainingProgress } = prev;
            return remainingProgress;
          }

          // Update progress
          return {
            ...prev,
            [blockId]: { ...currentProgress, progress: progressPercentage }
          };
        });
      }, 50);  // Update every 50ms for smooth progress
    }
  };

  // Crafting function
  const craftResource = (recipeId) => {
    const recipe = Object.values(recipes).find(r => r.id === recipeId);
    if (recipe) {
      // Check if all ingredients are available
      const canCraft = recipe.ingredients.every(ing => 
        (resources[ing.resource]?.amount || 0) >= ing.amount
      );

      if (canCraft) {
        // Deduct ingredients
        const updatedResources = { ...resources };
        recipe.ingredients.forEach(ing => {
          updatedResources[ing.resource].amount -= ing.amount;
        });

        // Add crafted resource
        updatedResources[recipe.outputResource] = {
          ...resources[recipe.outputResource],
          amount: (updatedResources[recipe.outputResource]?.amount || 0) + recipe.outputAmount
        };

        setResources(updatedResources);
      }
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Tabs defaultValue="resources" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
          <TabsTrigger value="crafting">Crafting</TabsTrigger>
        </TabsList>

        {/* Resources Tab */}
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(resources)
                .filter(([_, resource]) => 
                  typeof resource.unlockCondition === 'function' 
                    ? resource.unlockCondition(resources) 
                    : true
                )
                .map(([name, resource]) => (
                  <div 
                    key={resource.id} 
                    className="flex items-center space-x-4 mb-2"
                  >
                    <img 
                      src={resource.image} 
                      alt={name} 
                      className="w-10 h-10"
                    />
                    <span>{name}: {resource.amount}</span>
                  </div>
                ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Blocks Tab */}
        <TabsContent value="blocks">
          <Card>
            <CardHeader>
              <CardTitle>Breakable Blocks</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(blocks)
                .filter(([_, block]) => 
                  typeof block.unlockCondition === 'function' 
                    ? block.unlockCondition(resources) 
                    : true
                )
                .map(([name, block]) => (
                  <div 
                    key={block.id} 
                    className="flex flex-col space-y-2 mb-2"
                  >
                    <div className="flex items-center space-x-4">
                      <img 
                        src={block.image} 
                        alt={name} 
                        className="w-10 h-10"
                      />
                      <div>
                        <span>{block.displayName}</span>
                        <div className="text-sm text-gray-500">
                          Break Time: {block.breakTime}s | Drops: {block.resourceAmount} {block.resourceGained}
                        </div>
                      </div>
                      <Button 
                        onClick={() => gatherResource(block.id)}
                        className="ml-auto"
                        disabled={!!blockBreakingProgress[block.id]}
                      >
                        {blockBreakingProgress[block.id] ? 'Breaking...' : 'Break'}
                      </Button>
                    </div>
                    {blockBreakingProgress[block.id] && (
                      <Progress 
                        value={blockBreakingProgress[block.id].progress} 
                        className="w-full"
                      />
                    )}
                  </div>
                ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Crafting Tab */}
        <TabsContent value="crafting">
          <Card>
            <CardHeader>
              <CardTitle>Crafting Recipes</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(recipes)
                .filter(([_, recipe]) => 
                  typeof recipe.unlockCondition === 'function' 
                    ? recipe.unlockCondition(resources) 
                    : true
                )
                .map(([name, recipe]) => (
                  <div 
                    key={recipe.id} 
                    className="flex items-center space-x-4 mb-2"
                  >
                    <img 
                      src={recipe.image} 
                      alt={name} 
                      className="w-10 h-10"
                    />
                    <div>
                      <span>{recipe.displayName}</span>
                      <div className="text-sm text-gray-500">
                        Ingredients: {recipe.ingredients.map(ing => 
                          `${ing.amount} ${ing.resource}`
                        ).join(', ')}
                      </div>
                    </div>
                    <Button 
                      onClick={() => craftResource(recipe.id)}
                      className="ml-auto"
                      disabled={!recipe.ingredients.every(ing => 
                        (resources[ing.resource]?.amount || 0) >= ing.amount
                      )}
                    >
                      Craft ({recipe.outputAmount} {recipe.outputResource})
                    </Button>
                  </div>
                ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourceGatheringGame;