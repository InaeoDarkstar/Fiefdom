// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    event.remove({mod: 'endrem'})
	event.remove({output: 'minecraft:ender_eye'})
	
		event.shaped('kubejs:speye_empty', [
    'NWN',
    'PEP',
    'CSC'
  ], {
		E: 'minecraft:ender_eye',
		P: 'create:precision_mechanism',
		W: 'create:wrench',
		S: 'create:wand_of_symmetry',
		C: 'minecraft:raw_copper_block',
		N: 'create:experience_nugget'	}).id('fiefdom.steampunk_eye')
		

	event.recipes.ars_nouveau.enchanting_apparatus(
	    [
	    "minecraft:amethyst_block",
	    "ars_nouveau:abjuration_essence",
	    "minecraft:amethyst_block",
	    "ars_nouveau:manipulation_essence",
	    "minecraft:amethyst_block",
	    "ars_nouveau:conjuration_essence"
	    ],
	    "kubejs:speye_empty",
	    "kubejs:speyefull",
	    5000,
	    false).id('fiefdom.steampunk_fulleye')
	
  event.recipes.createSequencedAssembly([
Item.of('minecraft:ender_eye').withChance(6.5),
Item.of('minecraft:magma_cream').withChance(3.5)
  ], 'minecraft:ender_pearl', [
	event.recipes.createFilling('kubejs:eptrans', ['minecraft:ender_pearl', Fluid.of('minecraft:lava', 250)]),
    event.recipes.createDeploying('kubejs:eptrans', ['kubejs:eptrans', 'minecraft:blaze_powder']),
	event.recipes.createPressing('kubejs:eptrans', 'kubejs:eptrans'),
event.recipes.createPressing('kubejs:eptrans', 'kubejs:eptrans'),
event.recipes.createCutting('kubejs:eptrans', 'kubejs:eptrans').processingTime(100)
  ]).transitionalItem("kubejs:eptrans").loops(1).id('fiefdom.ender_eye')
	
	
	event.shaped('endrem:cold_eye', [
    'FIF',
    'PEP',
    'BGA'
  ], {
		F: 'torchmaster:frozen_pearl',
		I: 'alexsmobs:froststalker_helmet',
		E: 'minecraft:ender_eye',
		A: 'blue_skies:ethereal_arc',
		P: 'ecologics:penguin_feather',
		G: 'ars_nouveau:glyph_cold_snap',
		B: 'blue_skies:dusk_arc'
		 })
	 
	 event.shaped('endrem:corrupted_eye', [
    'GBP',
    'BEB',
    'MAS'
  ], {
		G: 'blue_skies:diopside_block',
		P: 'blue_skies:pyrope_block',
		A: 'blue_skies:aquite_block',
		B: 'blue_skies:star_flare',
		E: 'minecraft:ender_eye',
		M: 'blue_skies:moonstone_block',
		S: 'blue_skies:sunstone_block'
		 })	 

	event.shaped('endrem:lost_eye', [
    'ICF',
    'TEH',
    'MDV'
  ], {
		D: 'minecraft:diamond_block',
		M: 'create:brass_block',
		I: 'undergarden:regalium_block',
		E: 'minecraft:ender_eye',
		C: 'stalwart_dungeons:tungsten_ingot',
		F: 'blue_skies:falsite_block',
		T: 'twilightforest:fiery_block',
		H: 'blue_skies:horizonite_block',
		V: 'blue_skies:ventium_block'
		 }) 

	event.shaped('endrem:nether_eye', [
    'FCF',
    'WET',
    'OIO'
  ], {
		O: 'stalwart_dungeons:spore_bottle',
		I: 'minecraft:netherite_ingot',
		W: 'alexsmobs:warped_muscle',
		T: 'alexsmobs:hemolymph_sac',
		E: 'minecraft:ender_eye',
		F: 'ars_nouveau:fire_essence',
		C: 'ars_elemental:firenando_charm'
		 })

	event.shaped('endrem:old_eye', [
    'BRB',
    'NEN',
    'PUA'
  ], {
		
		B: 'stalwart_dungeons:nether_bricks_and_soul_sand',
		R: 'alexsmobs:sombrero',
		N: 'ecologics:sandcastle',
		U: 'alexsmobs:roadrunner_boots',
		E: 'minecraft:ender_eye',
		A: 'apotheosis:epic_material',
		P: 'alexsmobs:pocket_sand'
		 })

	event.shaped('endrem:rogue_eye', [
    'RCF',
    'JEJ',
    'FCR'
  ], {
		R: 'minecraft:redstone_block',
		C: 'create:precision_mechanism',
		J: 'create:electron_tube',
		E: 'minecraft:ender_eye',
		F: 'twilightforest:carminite_block'
		 })

	event.shaped('endrem:cursed_eye', [
    'BRB',
    'NEN',
    'BUB'
  ], {
		
		B: 'born_in_chaos_v1:death_totem',
		R: 'mca:scythe',
		N: 'born_in_chaos_v1:armor_plate_from_dark_metal',
		U: 'born_in_chaos_v1:smoked_flesh',
		E: 'minecraft:ender_eye'
		 })

    event.smithing('endrem:evil_eye', 'kubejs:speyefull', 'apotheosis:lucky_foot')

	event.shaped('endrem:guardian_eye', [
    'FSD',
    'IEI',
    'DSF'
  ], {
		S: 'minecraft:conduit',
		F: 'minecraft:sponge',
		I: 'undergarden:forgotten_block',
		E: 'minecraft:ender_eye',
		D: 'minecraft:dark_prismarine'
		 })	

	event.shaped('endrem:magical_eye', [
    'UFB',
    'NEN',
    'BRU'
  ], {
		
		B: 'ars_nouveau:blaze_fiber',
		R: 'ars_nouveau:amulet_of_mana_regen',
		N: 'twilightforest:magic_beans',
		U: 'minecraft:totem_of_undying',
		E: 'minecraft:ender_eye',
		F: 'twilightforest:quest_ram_trophy'
		 })
	 
	event.shaped('endrem:wither_eye', [
    'FNF',
    'IEI',
    'RWR'
  ], {
		I: 'graveyard:dark_iron_block',
		N: 'minecraft:nether_star',
		R: 'minecraft:wither_rose',
		W: 'ars_nouveau:glyph_wither',
		E: 'minecraft:ender_eye',
		F: 'ars_elemental:necrotic_focus'
		 })	 

	event.shaped('endrem:witch_eye', [
    'SHS',
    'NEN',
    'MDM'
  ], {
		S: 'ars_nouveau:enchanters_eye',
		H: 'endrem:witch_pupil',
		N: 'ars_nouveau:wixie_shards',
		D: 'ars_nouveau:potion_melder',
		E: 'minecraft:ender_eye',
		M: 'ars_nouveau:glyph_hex'
		 })	 
		 
	event.shaped('endrem:undead_eye', [
    'SRS',
    'FEF',
    'SUS'
  ], {
		R: 'deeperdarker:heart_of_the_deep',
		S: 'blue_skies:soul_fragment',
		U: 'endrem:undead_soul',
		E: 'minecraft:ender_eye',
		F: 'wardenlootforge:sculk_soul'
		 })	 
	
		event.shaped('endrem:exotic_eye', [
    'SRT',
    'FEF',
    'KUK'
  ], {
		R: 'aquamirae:abyssal_amethyst',
		S: 'ars_elemental:siren_charm',
		T: 'minecraft:trident',
		U: 'blue_skies:ventium_drifter_bucket',
		E: 'minecraft:ender_eye',
		F: 'apotheosis:rectifier',
		K: 'aquamirae:esca'
		 })	
})