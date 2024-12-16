const INITIAL_COLLECTIONS = {
    'starter-collection': {
        id: 'starter-collection',
        name: 'Starter Collection',
        requiredResources: [
            { resource: 'Dirt', amount: 100 },
            { resource: 'Rock', amount: 50 },
            { resource: 'Lava', amount: 25 }
        ],
        gemReward: 100,
        completed: false
    },
    'color-spectrum': {
        id: 'color-spectrum',
        name: 'Color Spectrum',
        requiredResources: [
            { resource: 'White Block', amount: 1 },
            { resource: 'Black Block', amount: 1 },
            { resource: 'Red Block', amount: 1 },
            { resource: 'Orange Block', amount: 1 },
            { resource: 'Yellow Block', amount: 1 },    
            { resource: 'Green Block', amount: 1 },
            { resource: 'Blue Block', amount: 1 },
            { resource: 'Purple Block', amount: 1 }
        ],
        gemReward: 500,
        completed: false
    },
    'good-morning': {
        id: 'good-morning',
        name: 'Good Morning',
        requiredResources: [
            { resource: 'Coffee Machine', amount: 1 },
            { resource: 'Wooden Chair', amount: 1 },
            { resource: 'Wooden Table', amount: 1 }
        ],
        gemReward: 750,
        completed: false
    }
};
