// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    event.shaped('dimdungeons:block_key_charger', [
    'PPP',
    'GEG',
    'BBB'
  ], {
		P: 'minecraft:dark_prismarine_slab',
		E: 'minecraft:ender_pearl',
		G: 'minecraft:gold_ingot',
		B: 'minecraft:stone_bricks'
		 })
})