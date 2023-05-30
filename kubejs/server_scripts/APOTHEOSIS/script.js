// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    
	event.remove({id: 'apotheosis:reforging_table'})
	event.remove({id: 'apotheosis:salvaging_table'})

	event.shaped('apotheosis:reforging_table', [
    'AAA',
    'CBC',
    'CCC'
  ], {		A: 'apotheosis:rare_material',
		B: 'apotheosis:infused_hellshelf',
		C: 'apotheosis:gem_dust' })

	event.shaped('apotheosis:salvaging_table', [
    'AAA',
    'CBC',
    'CCC'
  ], {		A: 'apotheosis:prismatic_web',
		B: 'minecraft:nether_star',
		C: 'apotheosis:gem_dust' })
    
})