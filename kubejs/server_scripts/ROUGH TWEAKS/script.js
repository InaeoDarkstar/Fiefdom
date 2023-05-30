// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    event.remove({id: 'roughtweaks:plaster'})
	event.shapeless('roughtweaks:plaster', ['minecraft:paper', 'roughtweaks:salve' , 'minecraft:string'])
	event.shapeless('roughtweaks:plaster', ['minecraft:kelp', 'roughtweaks:salve'])

	event.remove({id: 'roughtweaks:bandage'})
	event.shaped('roughtweaks:bandage', [
    '   ',
    'SWS',
    ' P '
  ], {
		S: 'minecraft:string',
		P: 'roughtweaks:salve',
		W: '#minecraft:wool'})
		
		
		
	event.remove({id: 'roughtweaks:medkit'})
	event.shaped('roughtweaks:medkit', [
    '   ',
    'PHP',
    'GGG'
  ], {
		P: 'roughtweaks:bandage',
		H: 'levelhearts:heart_piece',
		G: 'minecraft:gold_ingot' })
})