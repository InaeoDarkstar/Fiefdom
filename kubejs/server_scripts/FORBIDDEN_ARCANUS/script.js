// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

    event.remove({output: 'forbidden_arcanus:eternal_stella'})
    event.remove({id: 'forbidden_arcanus:mundabitur_dust'})
    
        event.shaped('forbidden_arcanus:mundabitur_dust', [
    'ABC',
    'DEF',
    '   '
  ], {
		A: 'forbidden_arcanus:arcane_crystal_dust',
		B: 'minecraft:redstone',
		C: 'minecraft:amethyst_shard',
		D: 'minecraft:bone_meal',
		E: 'minecraft:phantom_membrane',
		F: 'minecraft:gunpowder'})
    

})