// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    
    event.remove({id: 'ars_nouveau:imbuement_chamber'})
    event.remove({id: 'ars_nouveau:arcane_core'})
    event.remove({id: 'ars_nouveau:enchanting_apparatus'})
    event.remove({id: 'ars_nouveau:scribes_table'})
    event.remove({id: 'ars_nouveau:source_jar'})
    
})