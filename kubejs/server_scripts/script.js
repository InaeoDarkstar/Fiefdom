// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

LootJS.modifiers(event => {

event.addLootTableModifier(/.*/)
	.removeLoot("minecraft:shield")
})

ServerEvents.recipes(event => {
	
	//FOOD
	event.remove({id: 'minecraft:bread'})
	event.remove({id: 'betteranimalsplus:furnace/fried_egg'})
	event.remove({id: 'betteranimalsplus:campfire/fried_egg'})
	event.remove({id: 'betteranimalsplus:smoking/fried_egg'})

//FIEFDOM BOOK

	event.smelting(Item.of('patchouli:guide_book',{"patchouli:book": "patchouli:fiefdom_guide"}), 'minecraft:dirt')

	//SHIELDS


	
	event.remove({id: 'magistuarmory:wood_buckler'})
	event.shaped('magistuarmory:wood_buckler', [
    '   ',
    'OOI',
    'OO '
  ], {
		O: '#minecraft:planks',
		I: 'minecraft:copper_ingot'	})
		
	event.remove({id: 'magistuarmory:wood_target'})
	event.shaped('magistuarmory:wood_target', [
    '   ',
    'OO ',
    'OOI'
  ], {
		O: '#minecraft:planks',
		I: 'minecraft:copper_ingot'	})
		
	event.remove({id: 'magistuarmory:stone_buckler'})	
	event.shaped('magistuarmory:stone_buckler', [
    '   ',
    'OOI',
    'OO '
  ], {
		O: '#forge:cobblestone',
		I: 'minecraft:copper_ingot'	})
		
	event.remove({id: 'magistuarmory:stone_target'})
	event.shaped('magistuarmory:stone_target', [
    '   ',
    'OO ',
    'OOI'
  ], {
		O: '#forge:cobblestone',
		I: 'minecraft:copper_ingot'	})	
	
	event.shaped('24x minecraft:paper', [
    'OO ',
    'OO ',
    'OO '
  ], {
		O: 'minecraft:birch_log' })
	
	event.shaped('3x minecraft:paper', [
    '   ',
    'BBB',
    '   '
  ], {
		B: 'minecraft:bamboo' })
	
//CHAINMAIL
	event.remove({id: 'minecolonies:chainmailhelmet'})
	event.remove({id: 'minecolonies:chainmailchestplate'})
	event.remove({id: 'minecolonies:chainmailleggings'})
	event.remove({id: 'minecolonies:chainmailboots'})
	
	event.shaped('minecraft:chainmail_boots', [
    '   ',
    'C C',
    'C C'
  ], {
		C: 'magistuarmory:steel_chainmail' })
	
	event.shaped('minecraft:chainmail_leggings', [
    'CCC',
    'C C',
    'C C'
  ], {
		C: 'magistuarmory:steel_chainmail' })
	
	event.shaped('minecraft:chainmail_chestplate', [
    'C C',
    'CCC',
    'CCC'
  ], {
		C: 'magistuarmory:steel_chainmail' })
	
	event.shaped('minecraft:chainmail_helmet', [
    'CCC',
    'C C',
    '   '
  ], {
		C: 'magistuarmory:steel_chainmail' })
	
	event.remove({id: 'alexsmobs:blood_sprayer'})
	event.remove({id: 'minecraft:shield'})
	event.remove({id: 'blue_skies:moonstone_shield'})
	event.remove({id: 'stalwart_dungeons:tunsgten_shield_recipe'})
	event.remove({id: 'stalwart_dungeons:chorundum_shield_recipe'})
	event.remove({id: 'twilightforest:equipment/knightmetal_shield'})
	event.remove({id: 'undergarden:cloggrum_shield'})
	event.remove({id: 'alexsmobs:shield_of_the_deep'})
	event.remove({id: 'twilightforest:uncrafting_table'})
	event.remove({id: 'apotheosis:reforging_table'})
	event.remove({id: 'apotheosis:salvaging_table'})
	
	// WATER
	
	event.shaped('toughasnails:purified_water_canteen', [
    ' E ',
    'EPE',
    ' E '
], {
		E: 'toughasnails:purified_water_bottle',
		P: 'toughasnails:water_canteen'})
	
	// TELEPORT
	
	event.remove({id: 'waystones:warp_stone'})
	
	event.shaped('waystones:warp_stone', [
    'INI',
    'NSN',
    'INI'
  ], {
		N: 'minecraft:ender_pearl',
		I: 'minecraft:emerald',
		S: 'waystones:warp_scroll'
		 })
	
	
	event.remove({id: 'tombstone:tablet_of_recall'})
	event.remove({id: 'tombstone:tablet_of_home'})
	event.remove({id: 'tombstone:tablet_of_assistance'})
	event.remove({id: 'tombstone:tablet_of_cupidity'})
	
	event.shaped('tombstone:tablet_of_recall', [
    'INI',
    'NSN',
    'INI'
  ], {
		N: 'minecraft:ender_pearl',
		I: 'tombstone:grave_dust',
		S: 'tombstone:strange_tablet'
		 })
	event.shaped('tombstone:tablet_of_home', [
    'IQI',
    'NSN',
    'IQI'
  ], {
		N: 'minecraft:ender_pearl',
		I: 'tombstone:grave_dust',
		S: 'tombstone:strange_tablet',
		Q: 'minecraft:quartz'
		 })
	event.shaped('tombstone:tablet_of_assistance', [
    'INI',
    'NSN',
    'INI'
  ], {
		N: 'minecraft:ender_pearl',
		I: 'levelhearts:heart_piece',
		S: 'tombstone:strange_tablet'
		 })
	
	event.shaped('tombstone:tablet_of_cupidity', [
    'INI',
    'NSN',
    'INI'
  ], {
		N: 'minecraft:ender_pearl',
		I: 'dotcoinmod:iron_coin',
		S: 'tombstone:strange_tablet'
		 })
})


