// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    
	event.remove({id: 'aquamirae:oxygen_tank'})
	event.remove({id: 'aquamirae:three_bolt_suit'})
    
    event.shaped('aquamirae:three_bolt_suit', [
    'BBB',
    'ACA',
    'CCC'
  ], {
		A: 'ars_nouveau:air_essence',
		B: 'minecraft:iron_block',
		C: 'minecraft:leather'})
        

})