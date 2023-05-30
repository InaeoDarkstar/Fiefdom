// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

// REMOVE UPGRADES NOT USED

        event.remove({id: 'sophisticatedbackpacks:xp_pump_upgrade'})
        event.remove({id: 'sophisticatedbackpacks:advanced_pump_upgrade'})
        event.remove({id: 'sophisticatedbackpacks:pump_upgrade'})
        event.remove({id: 'sophisticatedbackpacks:battery_upgrade'})
        event.remove({id: 'sophisticatedbackpacks:tank_upgrade'})
        event.remove({id: 'sophisticatedbackpacks:inception_upgrade'})
        event.remove({id: 'sophisticatedbackpacks:stack_upgrade_tier_4'})
        event.remove({id: 'sophisticatedbackpacks:stack_upgrade_tier_3'})
        event.remove({id: 'sophisticatedbackpacks:stack_upgrade_tier_2'})
        event.remove({id: 'sophisticatedbackpacks:stonecutter_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:blasting_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:auto_blasting_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:smoking_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:auto_smoking_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:smelting_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:auto_smelting_upgrade'})

// WANDERING TRADER UPGRADES
        event.remove({id: 'sophisticatedbackpacks:pickup_upgrade'})
        event.remove({id: 'sophisticatedbackpacks:filter_upgrade'})
        event.remove({id: 'sophisticatedbackpacks:deposit_upgrade'})        
        event.remove({id: 'sophisticatedbackpacks:restock_upgrade'})
        event.remove({id: 'sophisticatedbackpacks:refill_upgrade'})

//BASE

        event.remove({id: 'sophisticatedbackpacks:upgrade_base'})
        
        event.recipes.createSequencedAssembly([
        Item.of('sophisticatedbackpacks:upgrade_base').withChance(7),
        Item.of('minecraft:rotten_flesh').withChance(3)
        ], 'minecraft:leather', [
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createCutting('kubejs:upgrade_base', 'kubejs:upgrade_base').processingTime(500),
    event.recipes.createCutting('kubejs:upgrade_base', 'kubejs:upgrade_base').processingTime(500)
  ]).transitionalItem("kubejs:upgrade_base").loops(3).id('fiefdom.upgradebase')

//PICKUP
    
        event.remove({id: 'sophisticatedbackpacks:advanced_pickup_upgrade'})        
      
      event.recipes.createSequencedAssembly([
        Item.of('sophisticatedbackpacks:advanced_pickup_upgrade')
        ], 'sophisticatedbackpacks:pickup_upgrade', [
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'create:precision_mechanism']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'create:brass_funnel']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createCutting('kubejs:upgrade_base', 'kubejs:upgrade_base').processingTime(250)
  ]).transitionalItem("kubejs:upgrade_base").loops(1).id('fiefdom.a_pickup_upgrade')
  
//MAGNET
  
        event.remove({id: 'sophisticatedbackpacks:magnet_upgrade'})
       
       event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "undergarden:depthrock_iron_ore",
            "minecraft:deepslate_iron_ore",
            "apotheosis:gem_dust",
            "minecraft:lodestone",
            "apotheosis:gem_dust",
            "minecraft:deepslate_iron_ore",
            "undergarden:depthrock_iron_ore"
        ],
	    "sophisticatedbackpacks:advanced_pickup_upgrade",
	    "sophisticatedbackpacks:magnet_upgrade",
	    10000,
	    false)
	    
        event.remove({output: 'sophisticatedbackpacks:advanced_magnet_upgrade'})
        
            event.recipes.ars_nouveau.imbuement(
        "sophisticatedbackpacks:magnet_upgrade",
        "sophisticatedbackpacks:advanced_magnet_upgrade",
        20000,
        [
            "minecraft:nether_star",
            "deeperdarker:sculk_stone_diamond_ore",
            "deeperdarker:warden_carapace",
            "minecraft:deepslate_diamond_ore",
            "ringsofascension:ring_magnetism",
            "undergarden:shiverstone_diamond_ore"
        ])
        
        
// FILTER
    
        event.remove({id: 'sophisticatedbackpacks:advanced_filter_upgrade'})        
      
      event.recipes.createSequencedAssembly([
        Item.of('sophisticatedbackpacks:advanced_filter_upgrade')
        ], 'sophisticatedbackpacks:filter_upgrade', [
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'create:placard']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'create:filter']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base')
  ]).transitionalItem("kubejs:upgrade_base").loops(1).id('fiefdom.a_filter_upgrade')
  
// VOID
  
        event.remove({id: 'sophisticatedbackpacks:void_upgrade'})
       
       event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:ender_eye",
            "minecraft:lodestone",
            "minecraft:ender_eye",
            "apotheosis:gem_dust",
            "minecraft:ender_eye",
            "minecraft:sculk_catalyst"
        ],
	    "sophisticatedbackpacks:upgrade_base",
	    "sophisticatedbackpacks:void_upgrade",
	    5000,
	    false)
  
         event.remove({output: 'sophisticatedbackpacks:advanced_void_upgrade'})
        
            event.recipes.ars_nouveau.imbuement(
        "sophisticatedbackpacks:void_upgrade",
        "sophisticatedbackpacks:advanced_void_upgrade",
        10000,
        [
            "minecraft:nether_star",
            "deeperdarker:reinforced_echo_shard",
            "ars_nouveau:void_jar",
            "ars_nouveau:void_prism",
            "stalwart_dungeons:void_crystal"
        ])
        
// COMPACTING

        event.remove({id: 'sophisticatedbackpacks:compacting_upgrade'})
       
       event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:piston",
            "minecraft:piston",
            "minecraft:end_crystal",
            "minecraft:piston",
            "minecraft:piston",
            "minecraft:piston",
            "minecraft:end_crystal",
            "minecraft:piston"
        ],
	    "sophisticatedbackpacks:upgrade_base",
	    "sophisticatedbackpacks:compacting_upgrade",
	    5000,
	    false)

         event.remove({output: 'sophisticatedbackpacks:advanced_compacting_upgrade'})
        
            event.recipes.ars_nouveau.imbuement(
        "sophisticatedbackpacks:compacting_upgrade",
        "sophisticatedbackpacks:advanced_compacting_upgrade",
        10000,
        [
            "minecraft:nether_star",
            "blue_skies:falsite_block",
            "minecraft:netherite_block",
            "twilightforest:carminite_block",
            "undergarden:forgotten_block"
        ])

// FEEDING

         event.remove({output: 'sophisticatedbackpacks:feeding_upgrade'})

       event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:golden_apple",
            "ars_nouveau:air_essence",
            "ars_nouveau:manipulation_essence"
        ],
	    "sophisticatedbackpacks:upgrade_base",
	    "sophisticatedbackpacks:feeding_upgrade",
	    30000,
	    false)
	    
         event.remove({output: 'sophisticatedbackpacks:advanced_feeding_upgrade'})
        
       event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecolonies:golden_bread",
            "minecraft:enchanted_golden_apple",
            "minecolonies:sugary_bread",
            "croptopia:the_big_breakfast",
            "minecolonies:milky_bread",
            "croptopia:banana_cream_pie"
        ],
	    "sophisticatedbackpacks:feeding_upgrade",
	    "sophisticatedbackpacks:advanced_feeding_upgrade",
	    60000,
	    false)

//DEPOSIT

        event.remove({id: 'sophisticatedbackpacks:advanced_deposit_upgrade'})        
      
      event.recipes.createSequencedAssembly([
        Item.of('sophisticatedbackpacks:advanced_deposit_upgrade')
        ], 'sophisticatedbackpacks:deposit_upgrade', [
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'create:smart_chute']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'create:filter']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base')
  ]).transitionalItem("kubejs:upgrade_base").loops(1).id('fiefdom.a_deposit_upgrade')

//RESTOCK

        event.remove({id: 'sophisticatedbackpacks:advanced_restock_upgrade'})        
      
      event.recipes.createSequencedAssembly([
        Item.of('sophisticatedbackpacks:advanced_restock_upgrade')
        ], 'sophisticatedbackpacks:restock_upgrade', [
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'minecraft:hopper']),
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'create:brass_funnel']),
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'create:filter']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base')
  ]).transitionalItem("kubejs:upgrade_base").loops(1).id('fiefdom.a_restock_upgrade')
  
//REFILL

        event.remove({id: 'sophisticatedbackpacks:advanced_refill_upgrade'})        
      
      event.recipes.createSequencedAssembly([
        Item.of('sophisticatedbackpacks:advanced_refill_upgrade')
        ], 'sophisticatedbackpacks:refill_upgrade', [
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'minecraft:hopper']),
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'ars_nouveau:glyph_phantom_block']),
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'ars_nouveau:glyph_extract']),
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'create:filter']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base')
  ]).transitionalItem("kubejs:upgrade_base").loops(1).id('fiefdom.a_refill_upgrade')

//EVERLASTING

        event.remove({id: 'sophisticatedbackpacks:everlasting_upgrade'})
        
       event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:respawn_anchor",
            "minecraft:nether_star",
            "minecraft:dragon_head",
            "minecraft:nether_star"
        ],
	    "sophisticatedbackpacks:upgrade_base",
	    "sophisticatedbackpacks:everlasting_upgrade",
	    150000,
	    false)

//CRAFTING

        event.remove({id: 'sophisticatedbackpacks:crafting_upgrade'})        
      
      event.recipes.createSequencedAssembly([
        Item.of('sophisticatedbackpacks:crafting_upgrade')
        ], 'sophisticatedbackpacks:upgrade_base', [
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'minecraft:crafting_table']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base')
  ]).transitionalItem("kubejs:upgrade_base").loops(2).id('fiefdom.crafting_upgrade')

//STACK

        event.remove({id: 'sophisticatedbackpacks:stack_upgrade_tier_1'})
        
       event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "create:item_vault",
            "minecraft:lodestone",
            "create:item_vault",
            "create:item_vault",
            "minecraft:diamond_block",
            "create:item_vault"
        ],
	    "sophisticatedbackpacks:compacting_upgrade",
	    "sophisticatedbackpacks:stack_upgrade_tier_1",
	    50000,
	    false)

//JUKEBOX

        event.remove({id: 'sophisticatedbackpacks:jukebox_upgrade'})        
      
      event.recipes.createSequencedAssembly([
        Item.of('sophisticatedbackpacks:jukebox_upgrade')
        ], 'sophisticatedbackpacks:upgrade_base', [
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'create:brass_casing']),
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'create:precision_mechanism']),
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'minecraft:diamond']),
    event.recipes.createCutting('kubejs:upgrade_base', 'kubejs:upgrade_base').processingTime(500),
    event.recipes.createCutting('kubejs:upgrade_base', 'kubejs:upgrade_base').processingTime(500)
  ]).transitionalItem("kubejs:upgrade_base").loops(1).id('fiefdom.jukebox_upgrade')
  
// TOOL SWAP

        event.remove({id: 'sophisticatedbackpacks:tool_swapper_upgrade'})        
      
      event.recipes.createSequencedAssembly([
        Item.of('sophisticatedbackpacks:tool_swapper_upgrade')
        ], 'sophisticatedbackpacks:upgrade_base', [
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'minecraft:stone_axe']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'minecraft:stone_pickaxe']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'minecraft:stone_shovel']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base')
  ]).transitionalItem("kubejs:upgrade_base").loops(1).id('fiefdom.tool_swapper_upgrade')

        event.remove({id: 'sophisticatedbackpacks:advanced_tool_swapper_upgrade'})        
      
      event.recipes.createSequencedAssembly([
        Item.of('sophisticatedbackpacks:advanced_tool_swapper_upgrade')
        ], 'sophisticatedbackpacks:tool_swapper_upgrade', [
    event.recipes.createDeploying('kubejs:upgrade_base', ['kubejs:upgrade_base', 'minecraft:diamond']),
    event.recipes.createPressing('kubejs:upgrade_base', 'kubejs:upgrade_base'),
    event.recipes.createCutting('kubejs:upgrade_base', 'kubejs:upgrade_base').processingTime(1500),
    event.recipes.createCutting('kubejs:upgrade_base', 'kubejs:upgrade_base').processingTime(1500),
    event.recipes.createCutting('kubejs:upgrade_base', 'kubejs:upgrade_base').processingTime(1500),
    event.recipes.createCutting('kubejs:upgrade_base', 'kubejs:upgrade_base').processingTime(1500)
  ]).transitionalItem("kubejs:upgrade_base").loops(9).id('fiefdom.a_tool_swapper_upgrade')

})