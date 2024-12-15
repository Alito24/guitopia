const INITIAL_BLOCKS = {
    'Dirt Block': {
        id: 'dirt-block',
        displayName: 'Dirt',
        image: 'img/dirt.png',
        resourceGained: 'Dirt',
        breakTime: 0.33,
        resourceAmount: 1,
        drops: [
            { resource: 'Dirt Mound', chance: 0.2, amount: 1 },
            { resource: 'Earth Essence', chance: 0.01, amount: 1 }
        ],
        gemRange: [0, 1],
        audio: 'sfx/dirt.ogg' 
    },
    'Sand Block': {
        id: 'sand-block',
        displayName: 'Sand',
        image: 'img/sand.png',
        resourceGained: 'Sand',
        breakTime: 0.33,
        resourceAmount: 1,
        conditions: [
            { resource: 'Desert Blast', amount: 1, type: 'min' }
        ],
        gemRange: [0, 1],
        audio: 'sfx/dirt.ogg' 
    },
    'Obsidian': {
        id: 'obsidian-block',
        displayName: 'Obsidian',
        image: 'img/obsidian.png',
        resourceGained: 'Obsidian',
        breakTime: 5,
        resourceAmount: 1,
        conditions: [
            { resource: 'Cave Blast', amount: 1, type: 'min' }
        ],
        gemRange: [10, 20],
        audio: 'sfx/rock.ogg' 
    },
    'Cactus': {
        id: 'cactus-block',
        displayName: 'cactus',
        image: 'img/cactus.png',
        resourceGained: 'Cactus',
        breakTime: 0.2,
        resourceAmount: 1,
        gemRange: [0, 1],
        audio: 'sfx/dirt.ogg',
        conditions: [
            { resource: 'Desert Blast', amount: 1, type: 'min' }
        ]
    },
    'Dirt Mound': {
        id: 'dirt-mound-block',
        displayName: 'Dirt Mound',
        image: 'img/dirt_mound.png',
        resourceGained: 'Wiggly Worm',
        breakTime: 0.1,
        resourceAmount: 0,
        removeResource: { resource: 'Dirt Mound', amount: 1 },
        conditions: [
            { resource: 'Dirt Mound', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Wiggly Worm', chance: 0.1, amount: 1 }
        ]
    },
    'Oak Tree': {
        id: 'oak-tree',
        displayName: 'oak-tree',
        image: 'img/tree.png',
        resourceGained: 'Logs',
        breakTime: 0.67,
        resourceAmount: 0,
        gemRange: [1, 2],
        audio: 'sfx/wood.ogg',
        drops: [
            { resource: 'Logs', chance: 1, amount: 1 },
            { resource: 'Stick', chance: 0.33, amount: 1 }
        ]
    },
    'Birch Tree': {
        id: 'birch-tree',
        displayName: 'birch-tree',
        image: 'img/birch_tree.png',
        resourceGained: 'Logs',
        breakTime: 0.67,
        resourceAmount: 0,
        gemRange: [1, 2],
        audio: 'sfx/wood.ogg',
        conditions: [
            { resource: 'Wooden Axe', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Logs', chance: 1, amount: 2 },
            { resource: 'Stick', chance: 0.5, amount: 1 }
        ]
    },
    'Rock': {
        id: 'rock-block',
        displayName: 'rock',
        image: 'img/rock.png',
        resourceGained: 'Rock',
        breakTime: 1,
        resourceAmount: 1,
        gemRange: [2, 4],
        audio: 'sfx/rock.ogg'
    },
    'Stalagmite': {
        id: 'stalagmite-block',
        displayName: 'stalagmite',
        image: 'img/stalagmite.png',
        resourceGained: 'Rock',
        breakTime: 0.75,
        resourceAmount: 2,
        gemRange: [2, 3],
        audio: 'sfx/rock.ogg'
    },
    'Lava': {
        id: 'lava-block',
        displayName: 'lava',
        image: 'img/lava.png',
        resourceGained: 'Lava',
        breakTime: 1.5,
        resourceAmount: 1,
        gemRange: [3, 7],
        audio: 'sfx/lava.ogg',
        drops: [
            { resource: 'Fire Essence', chance: 0.05, amount: 1 }
        ]
    },
    'Grass': {
        id: 'grass-block',
        displayName: 'grass',
        image: 'img/grass.png',
        resourceGained: 'Grass',
        breakTime: 0.167,
        resourceAmount: 0,
        gemRange: [1, 2],
        audio: 'sfx/dirt.ogg',
        removeResource: { resource: 'Grass', amount: 1 },
        conditions: [
            { resource: 'Grass', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Grass', chance: 0.5, amount: 1 }
        ]
    },
    'Bush': {
        id: 'bush-block',
        displayName: 'bush',
        image: 'img/bush.png',
        resourceGained: 'Grass',
        breakTime: 0.25,
        resourceAmount: 0,
        gemRange: [1, 3],
        audio: 'sfx/dirt.ogg',
        removeResource: { resource: 'Bush', amount: 1 },
        conditions: [
            { resource: 'Bush', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Bush', chance: 0.5, amount: 1 },
            { resource: 'Plant Fibre', chance: 0.1, amount: 1 }
        ]
    },
    'Stone Wall': {
        id: 'stone-wall-block',
        displayName: 'stone_wall',
        image: 'img/stone_wall.png',
        resourceGained: 'Stone Wall',
        breakTime: 1.25,
        resourceAmount: 0,
        gemRange: [5, 10],
        audio: 'sfx/rock.ogg',
        removeResource: { resource: 'Stone Wall', amount: 1 },
        conditions: [
            { resource: 'Stone Wall', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Stone Wall', chance: 0.33, amount: 1 }
        ]
    },
    'Texas Limestone': {
        id: 'texas-limestone-block',
        displayName: 'texas_limestone',
        image: 'img/texas_limestone.png',
        resourceGained: 'Texas Limestone',
        breakTime: 2,
        resourceAmount: 0,
        gemRange: [6, 12],
        audio: 'sfx/rock.ogg',
        removeResource: { resource: 'Texas Limestone', amount: 1 },
        conditions: [
            { resource: 'Texas Limestone', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Texas Limestone', chance: 0.2, amount: 1 },
            { resource: 'Rock', chance: 1, amount: 3 }
        ]
    },
    'Fish Tank': {
        id: 'fish-tank-block',
        displayName: 'fish_tank',
        image: 'img/fish_tank.png',
        resourceGained: 'Fish Tank',
        breakTime: 0.5,
        resourceAmount: 0,
        gemRange: [0, 11],
        audio: 'sfx/glass.ogg',
        removeResource: { resource: 'Fish Tank', amount: 1 },
        conditions: [
            { resource: 'Fish Tank', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Fish Tank', chance: 0.33, amount: 1 }
        ]
    },
    'White Block': {
        id: 'white-block',
        displayName: 'white_block',
        image: 'img/white_block.png',
        resourceGained: 'White Block',
        breakTime: 0.5,
        resourceAmount: 0,
        gemRange: [3, 8],
        audio: 'sfx/wood.ogg',
        removeResource: { resource: 'White Block', amount: 1 },
        conditions: [
            { resource: 'White Block', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'White Block', chance: 0.2, amount: 1 },
            { resource: 'Prismatic Essence', chance: 0.01, amount: 1 }
        ]
    },
    'Red Block': {
        id: 'red-block',
        displayName: 'red_block',
        image: 'img/red_block.png',
        resourceGained: 'Red Block',
        breakTime: 0.5,
        resourceAmount: 0,
        gemRange: [3, 8],
        audio: 'sfx/wood.ogg',
        removeResource: { resource: 'Red Block', amount: 1 },
        conditions: [
            { resource: 'Red Block', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Red Block', chance: 0.2, amount: 1 },
            { resource: 'Prismatic Essence', chance: 0.01, amount: 1 }
        ]
    },
    'Orange Block': {
        id: 'orange-block',
        displayName: 'orange_block',
        image: 'img/orange_block.png',
        resourceGained: 'Orange Block',
        breakTime: 0.5,
        resourceAmount: 0,
        gemRange: [3, 8],
        audio: 'sfx/wood.ogg',
        removeResource: { resource: 'Orange Block', amount: 1 },
        conditions: [
            { resource: 'Orange Block', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Orange Block', chance: 0.2, amount: 1 },
            { resource: 'Prismatic Essence', chance: 0.01, amount: 1 }
        ]
    },
    'Yellow Block': {
        id: 'yellow-block',
        displayName: 'yellow_block',
        image: 'img/yellow_block.png',
        resourceGained: 'Yellow Block',
        breakTime: 0.5,
        resourceAmount: 0,
        gemRange: [4, 10],
        audio: 'sfx/wood.ogg',
        removeResource: { resource: 'Yellow Block', amount: 1 },
        conditions: [
            { resource: 'Yellow Block', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Yellow Block', chance: 0.2, amount: 1 },
            { resource: 'Prismatic Essence', chance: 0.01, amount: 1 }
        ]
    },
    'Blue Block': {
        id: 'blue-block',
        displayName: 'blue_block',
        image: 'img/blue_block.png',
        resourceGained: 'Blue Block',
        breakTime: 0.5,
        resourceAmount: 0,
        gemRange: [5, 12],
        audio: 'sfx/wood.ogg',
        removeResource: { resource: 'Blue Block', amount: 1 },
        conditions: [
            { resource: 'Blue Block', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Blue Block', chance: 0.2, amount: 1 },
            { resource: 'Prismatic Essence', chance: 0.01, amount: 1 }
        ]
    },
    'Green Block': {
        id: 'green-block',
        displayName: 'green_block',
        image: 'img/green_block.png',
        resourceGained: 'Green Block',
        breakTime: 0.5,
        resourceAmount: 0,
        gemRange: [2, 5],
        audio: 'sfx/wood.ogg',
        removeResource: { resource: 'Green Block', amount: 1 },
        conditions: [
            { resource: 'Green Block', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Green Block', chance: 0.2, amount: 1 },
            { resource: 'Prismatic Essence', chance: 0.01, amount: 1 }
        ]
    },
    'Coal Ore': {
        id: 'coal-ore',
        displayName: 'coal_ore',
        image: 'img/coal_ore.png',
        resourceGained: 'Coal',
        breakTime: 3,
        resourceAmount: 0,
        gemRange: [4, 10],
        audio: 'sfx/rock.ogg',
        conditions: [
            { resource: 'Wooden Pickaxe', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Coal', chance: 1, amount: 1 }
        ]
    },
    'Well': {
        id: 'well',
        displayName: 'well',
        image: 'img/well.png',
        resourceGained: 'Water Bucket',
        breakTime: 2.5,
        resourceAmount: 0,
        audio: 'sfx/water.mp3',
        removeResource: { resource: 'Well', amount: 1 },
        conditions: [
            { resource: 'Well', amount: 1, type: 'min' }
        ],
        drops: [
            { resource: 'Water Bucket', chance: 1, amount: 3 }
        ]
    }
    
    
};
