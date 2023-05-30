// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    
// HARDER CONTROLLERS


    event.remove({id: 'storagedrawers:controller'})
    event.remove({id: 'storagedrawers:controller_slave'})
    
              event.recipes.ars_nouveau.imbuement(
        "forbidden_arcanus:dark_nether_star",
        "storagedrawers:controller",
        100000,
        [
            "minecraft:netherite_ingot",
            "minecraft:netherite_ingot",
            "minecraft:netherite_ingot",
            "minecraft:netherite_ingot"
        ])  

              event.recipes.ars_nouveau.imbuement(
        "minecraft:nether_star",
        "2x storagedrawers:controller_slave",
        50000,
        [
            "createdeco:netherite_nugget",
            "createdeco:netherite_nugget",
            "createdeco:netherite_nugget",
            "createdeco:netherite_nugget"
        ]) 

// UPGRADES REMOVAL

    event.remove({id: 'storagedrawers:emerald_storage_upgrade'})
    event.remove({id: 'storagedrawers:diamond_storage_upgrade'})
    
    
// UPGRADE RECIPIE CHANGES
    event.remove({id: 'storagedrawers:gold_storage_upgrade'})
    
      event.recipes.createSequencedAssembly([
        Item.of('storagedrawers:gold_storage_upgrade')
        ], 'storagedrawers:iron_storage_upgrade', [
    event.recipes.createDeploying('storagedrawers:iron_storage_upgrade', ['storagedrawers:iron_storage_upgrade', 'minecraft:gold_ingot']),
    event.recipes.createPressing('storagedrawers:iron_storage_upgrade', 'storagedrawers:iron_storage_upgrade'),
    event.recipes.createPressing('storagedrawers:iron_storage_upgrade', 'storagedrawers:iron_storage_upgrade'),
    event.recipes.createPressing('storagedrawers:iron_storage_upgrade', 'storagedrawers:iron_storage_upgrade'),
    event.recipes.createPressing('storagedrawers:iron_storage_upgrade', 'storagedrawers:iron_storage_upgrade')
  ]).transitionalItem("storagedrawers:iron_storage_upgrade").loops(9).id('fiefdom.goldstorage_upgrade')

    event.remove({id: 'storagedrawers:iron_storage_upgrade'})
    
          event.recipes.createSequencedAssembly([
        Item.of('storagedrawers:iron_storage_upgrade')
        ], 'storagedrawers:obsidian_storage_upgrade', [
    event.recipes.createDeploying('storagedrawers:obsidian_storage_upgrade', ['storagedrawers:obsidian_storage_upgrade', 'minecraft:iron_ingot']),
    event.recipes.createPressing('storagedrawers:obsidian_storage_upgrade', 'storagedrawers:obsidian_storage_upgrade'),
    event.recipes.createPressing('storagedrawers:obsidian_storage_upgrade', 'storagedrawers:obsidian_storage_upgrade'),
    event.recipes.createPressing('storagedrawers:obsidian_storage_upgrade', 'storagedrawers:obsidian_storage_upgrade'),
    event.recipes.createPressing('storagedrawers:obsidian_storage_upgrade', 'storagedrawers:obsidian_storage_upgrade')
  ]).transitionalItem("storagedrawers:obsidian_storage_upgrade").loops(9).id('fiefdom.ironstorage_upgrade')
  
    event.remove({id: 'storagedrawers:obsidian_storage_upgrade'})
    
        event.recipes.createSequencedAssembly([
        Item.of('storagedrawers:obsidian_storage_upgrade')
        ], 'storagedrawers:upgrade_template', [
    event.recipes.createDeploying('storagedrawers:upgrade_template', ['storagedrawers:upgrade_template', 'forbidden_arcanus:obsidian_ingot']),
    event.recipes.createPressing('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template'),
    event.recipes.createPressing('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template'),
    event.recipes.createPressing('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template'),
    event.recipes.createPressing('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template')
  ]).transitionalItem("storagedrawers:upgrade_template").loops(9).id('fiefdom.obsidianstorage_upgrade')   
    
    event.remove({id: 'storagedrawers:upgrade_template'})

        event.recipes.createSequencedAssembly([
        Item.of('4x storagedrawers:upgrade_template')
        ], 'ars_nouveau:earth_essence', [
    event.recipes.createDeploying('ars_nouveau:earth_essence', ['ars_nouveau:earth_essence', 'minecraft:stick']),
    event.recipes.createCutting('ars_nouveau:earth_essence', 'ars_nouveau:earth_essence').processingTime(1000),
    event.recipes.createCutting('ars_nouveau:earth_essence', 'ars_nouveau:earth_essence').processingTime(1000)
  ]).transitionalItem("ars_nouveau:earth_essence").loops(5).id('fiefdom.storage_upgradetemplate') 

    event.remove({id: 'storagedrawers:one_stack_upgrade'})
    
        event.recipes.createSequencedAssembly([
        Item.of('2x storagedrawers:one_stack_upgrade')
        ], 'storagedrawers:upgrade_template', [
    event.recipes.createDeploying('storagedrawers:upgrade_template', ['storagedrawers:upgrade_template', 'minecraft:flint']),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000)
  ]).transitionalItem("storagedrawers:upgrade_template").loops(1).id('fiefdom.storage_onestackupgrade') 
    
    event.remove({id: 'storagedrawers:void_upgrade'})

        event.recipes.createSequencedAssembly([
        Item.of('2x storagedrawers:void_upgrade')
        ], 'storagedrawers:upgrade_template', [
    event.recipes.createDeploying('storagedrawers:upgrade_template', ['storagedrawers:upgrade_template', 'minecraft:obsidian']),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000)
  ]).transitionalItem("storagedrawers:upgrade_template").loops(1).id('fiefdom.storage_voidupgrade')
  
    event.remove({id: 'storagedrawers:conversion_upgrade'})
    
        event.recipes.createSequencedAssembly([
        Item.of('4x storagedrawers:conversion_upgrade')
        ], 'storagedrawers:upgrade_template', [
    event.recipes.createDeploying('storagedrawers:upgrade_template', ['storagedrawers:upgrade_template', 'minecraft:lapis_block']),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000)
  ]).transitionalItem("storagedrawers:upgrade_template").loops(1).id('fiefdom.storage_conversionupgrade')
 
 
    event.remove({id: 'storagedrawers:redstone_upgrade'})
    
        event.recipes.createSequencedAssembly([
        Item.of('4x storagedrawers:redstone_upgrade')
        ], 'storagedrawers:upgrade_template', [
    event.recipes.createDeploying('storagedrawers:upgrade_template', ['storagedrawers:upgrade_template', 'minecraft:redstone_block']),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000)
  ]).transitionalItem("storagedrawers:upgrade_template").loops(1).id('fiefdom.storage_redstoneupgrade')
  
    event.remove({id: 'storagedrawers:min_redstone_upgrade'})
    
        event.recipes.createSequencedAssembly([
        Item.of('2x storagedrawers:min_redstone_upgrade')
        ], 'storagedrawers:upgrade_template', [
    event.recipes.createDeploying('storagedrawers:upgrade_template', ['storagedrawers:upgrade_template', 'minecraft:redstone']),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000)
  ]).transitionalItem("storagedrawers:upgrade_template").loops(1).id('fiefdom.storage_minredstoneupgrade')
  
    event.remove({id: 'storagedrawers:max_redstone_upgrade'})
    
        event.recipes.createSequencedAssembly([
        Item.of('2x storagedrawers:max_redstone_upgrade')
        ], 'storagedrawers:upgrade_template', [
    event.recipes.createDeploying('storagedrawers:upgrade_template', ['storagedrawers:upgrade_template', 'minecraft:redstone']),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000)
  ]).transitionalItem("storagedrawers:upgrade_template").loops(1).id('fiefdom.storage_maxredstoneupgrade')
  
    event.remove({id: 'storagedrawers:illumination_upgrade'})

        event.recipes.createSequencedAssembly([
        Item.of('8x storagedrawers:illumination_upgrade')
        ], 'storagedrawers:upgrade_template', [
    event.recipes.createDeploying('storagedrawers:upgrade_template', ['storagedrawers:upgrade_template', 'minecraft:glowstone']),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000)
  ]).transitionalItem("storagedrawers:upgrade_template").loops(1).id('fiefdom.storage_illuminationupgrade')

    event.remove({id: 'storagedrawers:fill_level_upgrade'})

        event.recipes.createSequencedAssembly([
        Item.of('4x storagedrawers:fill_level_upgrade')
        ], 'storagedrawers:upgrade_template', [
    event.recipes.createDeploying('storagedrawers:upgrade_template', ['storagedrawers:upgrade_template', 'minecraft:comparator']),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000),
    event.recipes.createCutting('storagedrawers:upgrade_template', 'storagedrawers:upgrade_template').processingTime(5000)
  ]).transitionalItem("storagedrawers:upgrade_template").loops(1).id('fiefdom.storage_fillupgrade')

})