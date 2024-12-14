
const INITIAL_RESOURCES = {
    'Dirt': { 
        id: 'dirt', 
        displayName: 'Dirt', 
        rarity: 'common',
        image: 'img/dirt.png', 
        amount: 0
    },
    'Sand': { 
        id: 'sand', 
        displayName: 'Sand', 
        rarity: 'common',
        image: 'img/sand.png', 
        amount: 0
    },
    'Obsidian': { 
        id: 'obsidian', 
        displayName: 'Obsidian', 
        rarity: 'common',
        image: 'img/obsidian.png', 
        amount: 0
    },
    'Glass Block': { 
        id: 'glass', 
        displayName: 'Glass Block',
        rarity: 'common', 
        image: 'img/glass.png', 
        amount: 0
    },
    'Dirt Mound': { 
        id: 'dirt-mound', 
        displayName: 'Dirt Mound',
        rarity: 'common', 
        image: 'img/dirt_mound.png', 
        amount: 0
    },
    'Rock': { 
        id: 'rock', 
        displayName: 'Rock', 
        rarity: 'common',
        image: 'img/rock.png', 
        amount: 0
    },
    'Lava': { 
        id: 'lava', 
        displayName: 'Lava', 
        rarity: 'common',
        image: 'img/lava.png', 
        amount: 0
    },
    'Grass': { 
        id: 'grass', 
        displayName: 'Grass', 
        rarity: 'common',
        image: 'img/grass.png', 
        amount: 0
    },
    'Wiggly Worm': {
        id: 'wiggly-worm',
        displayName: 'Wiggly Worm',
        rarity: 'uncommon',
        image: 'img/wiggly_worm.png',
        amount: 0
    },
    'Earth Essence': {
        id: 'earth-essence',
        displayName: 'Earth Essence',
        rarity: 'rare',
        image: 'img/earth_essence.png',
        amount: 0
    },
    'Fire Essence': {
        id: 'fire-essence',
        displayName: 'Fire Essence',
        rarity: 'rare',
        image: 'img/fire_essence.png',
        amount: 0
    },
    'Stone Wall': {
        id: 'stone-wall',
        displayName: 'Stone Wall',
        rarity: 'common',
        image: 'img/stone_wall.png',
        amount: 0
    },
    'Texas Limestone': {
        id: 'texas-limestone',
        displayName: 'Texas Limestone',
        rarity: 'common',
        image: 'img/texas_limestone.png',
        amount: 0
    },
    'Desert Blast': {
        id: 'desert-blast',
        displayName: 'Desert Blast',
        rarity: 'rare',
        image: 'img/desert_blast.png',
        amount: 0
    },
    'Forge': {
        id: 'forge',
        displayName: 'Forge',
        rarity: 'uncommon',
        image: 'img/forge.png',
        amount: 0
    },
    'Logs': {
        id: 'logs',
        displayName: 'Logs',
        rarity: 'common',
        image: 'img/logs.png',
        amount: 0
    },
    'Fish Tank': {
        id: 'fish_tank',
        displayName: 'Fish Tank',
        rarity: 'uncommon',
        image: 'img/fish_tank.png',
        amount: 0
    },
    'Cactus': {
        id: 'cactus',
        displayName: 'Cactus',
        rarity: 'common',
        image: 'img/cactus.png',
        amount: 0
    },
    'Wood Block': {
        id: 'wood_block',
        displayName: 'Wood Block',
        rarity: 'common',
        image: 'img/wood_block.png',
        amount: 0
    },
    'Daisy': {
        id: 'daisy',
        displayName: 'Daisy',
        rarity: 'common',
        image: 'img/daisy.png',
        amount: 0
    },
    'Rose': {
        id: 'rose',
        displayName: 'Rose',
        rarity: 'common',
        image: 'img/rose.png',
        amount: 0
    },
    'Poppy': {
        id: 'poppy',
        displayName: 'Poppy',
        rarity: 'common',
        image: 'img/poppy.png',
        amount: 0
    },
    'White Block': {
        id: 'white_block',
        displayName: 'White Block',
        rarity: 'common',
        image: 'img/white_block.png',
        amount: 0
    },
    'Red Block': {
        id: 'red_block',
        displayName: 'Red Block',
        rarity: 'common',
        image: 'img/red_block.png',
        amount: 0
    },
    'Orange Block': {
        id: 'orange_block',
        displayName: 'Orange Block',
        rarity: 'common',
        image: 'img/orange_block.png',
        amount: 0
    },
    'Yellow Block': {
        id: 'yellow_block',
        displayName: 'Yellow Block',
        rarity: 'common',
        image: 'img/yellow_block.png',
        amount: 0
    },
    'Prismatic Essence': {
        id: 'prismatic_essence',
        displayName: 'Prismatic',
        rarity: 'epic',
        image: 'img/prismatic_essence.png',
        amount: 0
    },
    'Sunflower': {
        id: 'sunflower',
        displayName: 'Sunflower',
        rarity: 'uncommon',
        image: 'img/sunflower.png',
        amount: 0
    },
    'Stick': {
        id: 'stick',
        displayName: 'Stick',
        rarity: 'common',
        image: 'img/stick.png',
        amount: 0
    },
    'Wood Rod': {
        id: 'wood_rod',
        displayName: 'Wood Rod',
        rarity: 'common',
        image: 'img/wood_rod.png',
        amount: 0
    },
    'Wooden Pickaxe': {
        id: 'wooden_pickaxe',
        displayName: 'Wooden Pickaxe',
        rarity: 'common',
        image: 'img/wooden_pickaxe.png',
        amount: 0
    },
    'Coal': {
        id: 'coal',
        displayName: 'Coal',
        rarity: 'common',
        image: 'img/coal.png',
        amount: 0
    },
    'Water Bucket': {
        id: 'water_bucket',
        displayName: 'Water Bucket',
        rarity: 'common',
        image: 'img/water_bucket.png',
        amount: 0
    },
    'Bush': {
        id: 'bush',
        displayName: 'Bush',
        rarity: 'common',
        image: 'img/bush.png',
        amount: 0
    },
    'Blue Block': {
        id: 'blue_block',
        displayName: 'Blue Block',
        rarity: 'common',
        image: 'img/blue_block.png',
        amount: 0
    },
    'Black Block': {
        id: 'black_block',
        displayName: 'Black Block',
        rarity: 'common',
        image: 'img/black_block.png',
        amount: 0
    },
    'Purple Block': {
        id: 'purple_block',
        displayName: 'Purple Block',
        rarity: 'uncommon',
        image: 'img/purple_block.png',
        amount: 0
    },
    'Green Block': {
        id: 'green_block',
        displayName: 'Green Block',
        rarity: 'common',
        image: 'img/green_block.png',
        amount: 0
    },
    'Cave Blast': {
        id: 'cave_blast',
        displayName: 'Cave Blast',
        rarity: 'rare',
        image: 'img/cave_blast.png',
        amount: 0
    },
    'Microwave': {
        id: 'microwave',
        displayName: 'Microwave',
        rarity: 'uncommon',
        image: 'img/microwave.png',
        amount: 0
    },
    'Brown Block': {
        id: 'brown_block',
        displayName: 'Brown Block',
        rarity: 'uncommon',
        image: 'img/brown_block.png',
        amount: 0
    },
    'Wooden Chair': {
        id: 'wooden_chair',
        displayName: 'Wooden Chair',
        rarity: 'common',
        image: 'img/wooden_chair.png',
        amount: 0
    },
    'Wooden Table': {
        id: 'wooden_table',
        displayName: 'Wooden Table',
        rarity: 'common',
        image: 'img/wooden_table.png',
        amount: 0
    },
    'Wooden Axe': {
        id: 'wooden_axe',
        displayName: 'Wooden Axe',
        rarity: 'common',
        image: 'img/wooden_axe.png',
        amount: 0
    },
    'Coffee Machine': {
        id: 'coffee_machine',
        displayName: 'Coffee Machine',
        rarity: 'rare',
        image: 'img/coffee_machine.png',
        amount: 0
    },
    'Plant Fibre': {
        id: 'plant_fibre',
        displayName: 'Plant Fibre',
        rarity: 'uncommon',
        image: 'img/plant_fibre.png',
        amount: 0
    },
    'Rope': {
        id: 'rope',
        displayName: 'Rope',
        rarity: 'uncommon',
        image: 'img/rope.png',
        amount: 0
    },
    'Well': {
        id: 'well',
        displayName: 'Well',
        rarity: 'uncommon',
        image: 'img/well.png',
        amount: 0
    },
    'Void': {
        id: 'void',
        displayName: 'Void',
        rarity: 'ancient',
        image: 'img/void.png',
        amount: 99
    }
};
