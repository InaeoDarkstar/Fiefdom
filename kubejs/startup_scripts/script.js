// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

	event.create('eptrans','create:sequenced_assembly').displayName('Incomplete Ender Pearl')
	event.create('speyefull').displayName('Complete Steampunk Eye')
	event.create('speye_empty').displayName('Incomplete Steampunk Eye')
	event.create('upgrade_base', 'create:sequenced_assembly').displayName('Incomplete Upgrade')
})


//SATURATION REMOVAL

ItemEvents.modification(event => {

    event.modify('minecraft:honey_bottle', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

    event.modify('croptopia:apple_juice', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

    event.modify('croptopia:cranberry_juice', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

    event.modify('croptopia:grape_juice', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

    event.modify('croptopia:melon_juice', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

    event.modify('croptopia:orange_juice', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

    event.modify('croptopia:pineapple_juice', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

    event.modify('croptopia:saguaro_juice', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

    event.modify('croptopia:tomato_juice', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

    event.modify('croptopia:banana_smoothie', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

    event.modify('croptopia:strawberry_smoothie', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:kale_smoothie', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:fruit_smoothie', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:chocolate_milkshake', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:wine', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:mead', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:rum', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:pumpkin_spice_latte', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:beer', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}

   event.modify('croptopia:horchata', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:coffee', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:lemonade', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:limeade', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:soy_milk', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })

   event.modify('croptopia:tea', i => {
        i.foodProperties = f => {
            f.hunger(0)
            f.saturation(0)}
    })
})

// GEAR CHANGE

	event.modify('minecraft:shield', item => {
		item.maxDamage = 2

})

})



StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})