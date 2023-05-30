// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')
    
// REPLACE VANILLA SHIELD

ServerEvents.recipes(event => {

	event.remove({output: 'minecraft:shield'})
	event.remove({id: 'cataclysm:bulwark_of_the_flame'})

	event.shaped('cataclysm:bulwark_of_the_flame', [
    'ABA',
    'CDC',
    'ABA'
  ], {
		A: 'minecraft:nether_brick',
		B: 'cataclysm:ignitium_ingot',
		C: 'minecraft:blaze_rod',
		D: 'magistuarmory:netherite_kiteshield'})

	event.remove({output: 'forbidden_arcanus:obsidian_skull_shield'})

	event.smithing('magistuarmory:netherite_kiteshield', 'forbidden_arcanus:obsidian_skull', 'forbidden_arcanus:obsidian_skull_shield')

	event.remove({id: 'ars_nouveau:enchanters_shield'})

	event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:gold_block",
            "minecraft:gold_block",
            "ars_nouveau:source_gem_block",
            "ars_nouveau:source_gem_block"
        ],
	    "magistuarmory:netherite_kiteshield",
	    "ars_nouveau:enchanters_shield",
	    0,
	    false)

})
