const INITIAL_SHOP_PACKS = {
    'starter_pack': {
        id: 'starter_pack',
        name: 'Starter Pack',
        image: 'img/tree.png',
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
        gemCost: 150,
        content: [
            { resource: 'Rose', chance: 1, amount: 8 },
            { resource: 'Daisy', chance: 1, amount: 12 },
            { resource: 'Poppy', chance: 0.75, amount: 3 },
            { resource: 'Sunflower', chance: 0.5, amount: 1 }
        ]
    }
};