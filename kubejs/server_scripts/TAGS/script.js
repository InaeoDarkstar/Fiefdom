// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.tags('item', event => {

// BRICKS

	event.add('supplementaries:throwable_bricks',
 'createdeco:scarlet_brick')

// BELTS

	event.add('curios:charm',
 'ars_nouveau:mundane_belt')

	event.add('curios:charm',
 'ars_nouveau:belt_of_levitation')

	event.add('curios:charm',
 'ars_nouveau:belt_of_unstable_gifts')

	event.add('curios:charm',
 'reliquary:mob_charm_belt')

})


