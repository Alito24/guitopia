const INITIAL_RECIPES = {
    'Dirt Mound Recipe': {
        id: 'dirt-mound-recipe',
        displayName: 'Dirt Mound Recipe',
        image: 'img/dirt_mound.png',
        ingredients: [{ resource: 'Dirt', amount: 3 }],
        outputResource: 'Dirt Mound',
        outputAmount: 1
    },
    'Grass Recipe': {
        id: 'grass-recipe',
        displayName: 'Grass Recipe',
        image: 'img/grass.png',
        ingredients: [
            { resource: 'Dirt', amount: 1 },
            { resource: 'Rock', amount: 1 }
        ],
        outputResource: 'Grass',
        outputAmount: 1
    },
    'Stone Wall Recipe': {
        id: 'stone-wall-recipe',
        displayName: 'Stone Wall Recipe',
        image: 'img/stone_wall.png',
        ingredients: [
            { resource: 'Rock', amount: 2 }
        ],
        conditions: [
            { resource: 'Rock', type: 'min', amount: 1 },
        ],
        outputResource: 'Stone Wall',
        outputAmount: 1
    },
    'Texas Limestone Recipe': {
        id: 'texas-limestone-recipe',
        displayName: 'Texas Limestone Recipe',
        image: 'img/texas_limestone.png',
        ingredients: [
            { resource: 'Stone Wall', amount: 1 },
            { resource: 'Dirt', amount: 1 }
        ],
        conditions: [
            { resource: 'Stone Wall', type: 'min', amount: 1 },
        ],
        outputResource: 'Texas Limestone',
        outputAmount: 1
    },
    'Desert Blast Recipe': {
        id: 'desert-blast-recipe',
        displayName: 'Desert Blast Recipe',
        image: 'img/desert_blast.png',
        ingredients: [
            { resource: 'Rock', amount: 50 },
            { resource: 'Dirt', amount: 100 },
            { resource: 'Wiggly Worm', amount: 3},
            { resource: 'Earth Essence', amount: 1 }
        ],
        conditions: [
            { resource: 'Desert Blast', type: 'max', amount: 0 },
        ],
        outputResource: 'Desert Blast',
        outputAmount: 1
    },
    'Cave Blast Recipe': {
        id: 'cave-blast-recipe',
        displayName: 'Cave Blast Recipe',
        image: 'img/cave_blast.png',
        ingredients: [
            { resource: 'Texas Limestone', amount: 20 },
            { resource: 'Rock', amount: 100 },
            { resource: 'Sand', amount: 50},
            { resource: 'Earth Essence', amount: 1 }
        ],
        conditions: [
            { resource: 'Cave Blast', type: 'max', amount: 0 },
        ],
        outputResource: 'Cave Blast',
        outputAmount: 1
    },
    'Glass Block Recipe': {
        id: 'glass-recipe',
        displayName: 'Glass Block Recipe',
        image: 'img/glass.png',
        ingredients: [
            { resource: 'Sand', amount: 1 },
        ],
        conditions: [
            { resource: 'Forge', type: 'min', amount: 1 },
            { resource: 'Sand', type: 'min', amount: 1 }
        ],
        outputResource: 'Glass Block',
        outputAmount: 1
    },
    'Forge Recipe': {
        id: 'forge-recipe',
        displayName: 'Forge Recipe',
        image: 'img/forge.png',
        ingredients: [
            { resource: 'Stone Wall', amount: 40 },
            { resource: 'Lava', amount: 60 },
            { resource: 'Logs', amount: 30 }
        ],
        conditions: [
            { resource: 'Forge', type: 'max', amount: 0 },
        ],
        outputResource: 'Forge',
        outputAmount: 1
    },
    'Fish Tank Recipe': {
        id: 'fish-tank-recipe',
        displayName: 'Fish Tank Recipe',
        image: 'img/fish_tank.png',
        ingredients: [
            { resource: 'Water Bucket', amount: 1 },
            { resource: 'Glass Block', amount: 8 },
        ],
        conditions: [
            { resource: 'Glass Block', type: 'min', amount: 1 },
        ],
        outputResource: 'Fish Tank',
        outputAmount: 8
    },
    'Wood Block Recipe': {
        id: 'wood-block-recipe',
        displayName: 'Wood Block Recipe',
        image: 'img/wood_block.png',
        ingredients: [
            { resource: 'Logs', amount: 4 }
        ],
        conditions: [
            { resource: 'Logs', type: 'min', amount: 1 },
        ],
        outputResource: 'Wood Block',
        outputAmount: 1
    },
    'Rose Recipe': {
        id: 'rose-recipe',
        displayName: 'Rose Recipe',
        image: 'img/rose.png',
        ingredients: [
            { resource: 'Grass', amount: 1 },
            { resource: 'Lava', amount: 1 }
        ],
        conditions: [
            { resource: 'Grass', type: 'min', amount: 1 },
        ],
        outputResource: 'Rose',
        outputAmount: 1
    },
    'Daisy Recipe': {
        id: 'daisy-recipe',
        displayName: 'Daisy Recipe',
        image: 'img/daisy.png',
        ingredients: [
            { resource: 'Grass', amount: 1 },
            { resource: 'Dirt', amount: 1 }
        ],
        conditions: [
            { resource: 'Grass', type: 'min', amount: 1 },
        ],
        outputResource: 'Daisy',
        outputAmount: 1
    },
    'Poppy Recipe': {
        id: 'poppy-recipe',
        displayName: 'Poppy Recipe',
        image: 'img/poppy.png',
        ingredients: [
            { resource: 'Rose', amount: 1 },
            { resource: 'Daisy', amount: 1 }
        ],
        conditions: [
            { resource: 'Rose', type: 'min', amount: 1 },
        ],
        outputResource: 'Poppy',
        outputAmount: 1
    },
    'Sunflower Recipe': {
        id: 'sunflower-recipe',
        displayName: 'Sunflower Recipe',
        image: 'img/sunflower.png',
        ingredients: [
            { resource: 'Rose', amount: 1 },
            { resource: 'Poppy', amount: 1 }
        ],
        conditions: [
            { resource: 'Poppy', type: 'min', amount: 1 },
        ],
        outputResource: 'Sunflower',
        outputAmount: 1
    },
    'White Block Recipe': {
        id: 'white-block-recipe',
        displayName: 'White Block Recipe',
        image: 'img/white_block.png',
        ingredients: [
            { resource: 'Wood Block', amount: 1 },
            { resource: 'Daisy', amount: 1 }
        ],
        conditions: [
            { resource: 'Wood Block', type: 'min', amount: 1 },
        ],
        outputResource: 'White Block',
        outputAmount: 1
    },
    'Red Block Recipe': {
        id: 'red-block-recipe',
        displayName: 'Red Block Recipe',
        image: 'img/red_block.png',
        ingredients: [
            { resource: 'Wood Block', amount: 1 },
            { resource: 'Rose', amount: 1 }
        ],
        conditions: [
            { resource: 'Wood Block', type: 'min', amount: 1 },
        ],
        outputResource: 'Red Block',
        outputAmount: 1
    },
    'Orange Block Recipe': {
        id: 'orange-block-recipe',
        displayName: 'Orange Block Recipe',
        image: 'img/orange_block.png',
        ingredients: [
            { resource: 'Wood Block', amount: 1 },
            { resource: 'Poppy', amount: 1 }
        ],
        conditions: [
            { resource: 'Wood Block', type: 'min', amount: 1 },
        ],
        outputResource: 'Orange Block',
        outputAmount: 1
    },
    'Yellow Block Recipe': {
        id: 'yellow-block-recipe',
        displayName: 'Yellow Block Recipe',
        image: 'img/yellow_block.png',
        ingredients: [
            { resource: 'Wood Block', amount: 3 },
            { resource: 'Sunflower', amount: 1 }
        ],
        conditions: [
            { resource: 'Wood Block', type: 'min', amount: 1 },
        ],
        outputResource: 'Yellow Block',
        outputAmount: 3
    },
    'Blue Block Recipe': {
        id: 'blue-block-recipe',
        displayName: 'Blue Block Recipe',
        image: 'img/blue_block.png',
        ingredients: [
            { resource: 'Wood Block', amount: 3 },
            { resource: 'Water Bucket', amount: 1 }
        ],
        conditions: [
            { resource: 'Wood Block', type: 'min', amount: 1 },
        ],
        outputResource: 'Blue Block',
        outputAmount: 3
    },
    'Black Block Recipe': {
        id: 'black-block-recipe',
        displayName: 'Black Block Recipe',
        image: 'img/black_block.png',
        ingredients: [
            { resource: 'Wood Block', amount: 5 },
            { resource: 'Obsidian', amount: 1 }
        ],
        conditions: [
            { resource: 'Wood Block', type: 'min', amount: 1 },
            { resource: 'Obsidian', type: 'min', amount: 1 }
        ],
        outputResource: 'Black Block',
        outputAmount: 5
    },
    'Green Block Recipe': {
        id: 'green-block-recipe',
        displayName: 'Green Block Recipe',
        image: 'img/green_block.png',
        ingredients: [
            { resource: 'Wood Block', amount: 1 },
            { resource: 'Cactus', amount: 1 }
        ],
        conditions: [
            { resource: 'Cactus', type: 'min', amount: 1 },
            { resource: 'Wood Block', type: 'min', amount: 1 }
        ],
        outputResource: 'Green Block',
        outputAmount: 1
    },
    'Purple Block Recipe': {
        id: 'purple-block-recipe',
        displayName: 'Purple Block Recipe',
        image: 'img/purple_block.png',
        ingredients: [
            { resource: 'Red Block', amount: 1 },
            { resource: 'Black Block', amount: 1 }
        ],
        conditions: [
            { resource: 'Black Block', type: 'min', amount: 1 },
        ],
        outputResource: 'Purple Block',
        outputAmount: 1
    },
    'Brown Block Recipe': {
        id: 'brown-block-recipe',
        displayName: 'Brown Block Recipe',
        image: 'img/brown_block.png',
        ingredients: [
            { resource: 'Red Block', amount: 1 },
            { resource: 'Blue Block', amount: 1 },
            { resource: 'Yellow Block', amount: 1 }
        ],
        conditions: [
            { resource: 'Blue Block', type: 'min', amount: 1 },
        ],
        outputResource: 'Brown Block',
        outputAmount: 1
    },
    'Wood Rod Recipe': {
        id: 'wood-rod-recipe',
        displayName: 'Wood Rod Recipe',
        image: 'img/wood_rod.png',
        ingredients: [
            { resource: 'Stick', amount: 4 }
        ],
        conditions: [
            { resource: 'Stick', type: 'min', amount: 1 },
        ],
        outputResource: 'Wood Rod',
        outputAmount: 1
    },
    'Rope Recipe': {
        id: 'rope-recipe',
        displayName: 'Rope Recipe',
        image: 'img/rope.png',
        ingredients: [
            { resource: 'Plant Fibre', amount: 4 }
        ],
        conditions: [
            { resource: 'Plant Fibre', type: 'min', amount: 1 },
        ],
        outputResource: 'Rope',
        outputAmount: 1
    },
    'Wooden Pickaxe Recipe': {
        id: 'wooden-pickaxe-recipe',
        displayName: 'Wooden Pickaxe Recipe',
        image: 'img/wooden_pickaxe.png',
        ingredients: [
            { resource: 'Wood Rod', amount: 2 },
            { resource: 'Logs', amount: 8 }
        ],
        conditions: [
            { resource: 'Wood Rod', type: 'min', amount: 1 },
        ],
        outputResource: 'Wooden Pickaxe',
        outputAmount: 1
    },
    'Wooden Axe Recipe': {
        id: 'wooden-axe-recipe',
        displayName: 'Wooden Axe Recipe',
        image: 'img/wooden_axe.png',
        ingredients: [
            { resource: 'Wood Rod', amount: 2 },
            { resource: 'Logs', amount: 12 }
        ],
        conditions: [
            { resource: 'Wood Rod', type: 'min', amount: 1 },
        ],
        outputResource: 'Wooden Axe',
        outputAmount: 1
    },
    'Well Recipe': {
        id: 'well-recipe',
        displayName: 'Well Recipe',
        image: 'img/well.png',
        ingredients: [
            { resource: 'Wood Rod', amount: 3 },
            { resource: 'Stone Wall', amount: 4 }
        ],
        conditions: [
            { resource: 'Wood Rod', type: 'min', amount: 1 },
        ],
        outputResource: 'Well',
        outputAmount: 1
    },
    'Bush Recipe': {
        id: 'bush-recipe',
        displayName: 'Bush Recipe',
        image: 'img/bush.png',
        ingredients: [
            { resource: 'Grass', amount: 3 },
            { resource: 'Water Bucket', amount: 1 }
        ],
        conditions: [
            { resource: 'Water Bucket', type: 'min', amount: 1 },
        ],
        outputResource: 'Bush',
        outputAmount: 5
    },
    'Microwave Recipe': {
        id: 'microwave-recipe',
        displayName: 'Microwave Recipe',
        image: 'img/microwave.png',
        ingredients: [
            { resource: 'White Block', amount: 2 },
            { resource: 'Glass Block', amount: 3 },
            { resource: 'Lava', amount: 1 }
        ],
        conditions: [
            { resource: 'Glass Block', type: 'min', amount: 1 },
        ],
        outputResource: 'Microwave',
        outputAmount: 1
    },
    'Wooden Chair': {
        id: 'wooden-chair-recipe',
        displayName: 'Wooden Chair Recipe',
        image: 'img/wooden_chair.png',
        ingredients: [
            { resource: 'Wood Rod', amount: 4 },
            { resource: 'Wood Block', amount: 2 },
        ],
        conditions: [
            { resource: 'Wood Rod', type: 'min', amount: 1 },
        ],
        outputResource: 'Wooden Chair',
        outputAmount: 1
    },
    'Wooden Table': {
        id: 'wooden-table-recipe',
        displayName: 'Wooden Table Recipe',
        image: 'img/wooden_table.png',
        ingredients: [
            { resource: 'Wood Rod', amount: 4 },
            { resource: 'Wood Block', amount: 4 },
        ],
        conditions: [
            { resource: 'Wood Rod', type: 'min', amount: 1 },
        ],
        outputResource: 'Wooden Table',
        outputAmount: 1
    },
    'Coffee Machine': {
        id: 'coffee-machine-recipe',
        displayName: 'Coffee Machine Recipe',
        image: 'img/coffee_machine.png',
        ingredients: [
            { resource: 'Microwave', amount: 1 },
            { resource: 'Brown Block', amount: 2 },
        ],
        conditions: [
            { resource: 'Microwave', type: 'min', amount: 1 },
        ],
        outputResource: 'Coffee Machine',
        outputAmount: 1
    }
    
};