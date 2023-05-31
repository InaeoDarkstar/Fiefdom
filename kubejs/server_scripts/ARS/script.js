// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    
	event.remove({id: 'ars_nouveau:imbuement_chamber'})
	event.remove({id: 'ars_nouveau:arcane_core'})
	event.remove({id: 'ars_nouveau:enchanting_apparatus'})
	event.remove({id: 'ars_nouveau:scribes_table'})
	event.remove({id: 'ars_nouveau:source_jar'})
	event.remove({output: 'ars_nouveau:belt_of_levitation'})

       event.recipes.ars_nouveau.enchanting_apparatus(
        [
	"cataclysm:void_eye",
        "ars_nouveau:air_essence",
        "minecraft:dragon_head",
        "minecraft:ender_eye",
        "cataclysm:void_eye",
        "ars_nouveau:air_essence",
        "minecraft:dragon_head",
	"minecraft:ender_eye"
        ],
	    "ars_nouveau:mundane_belt",
	    "ars_nouveau:belt_of_levitation",
	    5000,
	    false)
    
})