const INITIAL_SHOP_PACKS = {
    'starter_pack': {
        id: 'starter_pack',
        name: 'Starter Pack',
        image: 'img/tree.png',
        level: 0,
        gemCost: 50,
        content: [
            { resource: 'Dirt', chance: 1, amount: 30 },
            { resource: 'Rock', chance: 1, amount: 10 },
            { resource: 'Lava', chance: 1, amount: 5 }
        ]
    },
    'flower_pack': {
        id: 'flower_pack',
        name: 'Flower Pack',
        image: 'img/rose.png',
        level: 1,
        gemCost: 150,
        content: [
            { resource: 'Rose', chance: 1, amount: 8 },
            { resource: 'Daisy', chance: 1, amount: 12 },
            { resource: 'Poppy', chance: 0.75, amount: 3 },
            { resource: 'Sunflower', chance: 0.5, amount: 1 }
        ]
    },
    'basic_block_pack': {
        id: 'basic_block_pack',
        name: 'Basic Block Pack',
        image: 'img/red_block.png',
        level: 2,
        gemCost: 500,
        content: [
            { resource: 'Red Block', chance: 1, amount: 20 },
            { resource: 'White Block', chance: 1, amount: 20 },
            { resource: 'Blue Block', chance: 1, amount: 15 },
            { resource: 'Bricks', chance: 1, amount: 5 },
            { resource: 'Purple Block', chance: 0.5, amount: 10 },
            { resource: 'Brown Block', chance: 0.25, amount: 5 }
        ]
    }
};
