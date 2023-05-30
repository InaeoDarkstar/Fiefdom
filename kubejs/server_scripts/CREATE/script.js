// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    
    event.remove({output: 'create:empty_blaze_burner'})
    event.remove({output: 'create:water_wheel'})
    event.remove({output: 'create:windmill_bearing'})
    event.remove({output: 'create:sail_frame'})
    event.remove({output: 'create:white_sail'})
    event.remove({output: 'create:steam_engine'})
    
    event.shapeless(
        Item.of('create:white_sail', 1),
        [
            'create:sail_frame',
            '#minecraft:wool'
            ])

})