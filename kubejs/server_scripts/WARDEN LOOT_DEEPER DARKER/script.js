// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

// JEI @deeper | @warden
// BALANCE BETWEEN MODS

    event.remove({id: 'wardenlootforge:warden_heart'})
	event.shapeless(Item.of('minecraft:echo_shard', 2), ['wardenlootforge:warden_heart'])

    event.remove({id: 'wardenlootforge:sculk_ingot'})	
	event.shaped(
	    Item.of('wardenlootforge:sculk_ingot'),
	    [
	       'AAA', 
	       'ABA',
	       'AAA'
	        ],
	        {A: 'wardenlootforge:sculk_soul',
	         B: 'deeperdarker:heart_of_the_deep'
	        })
	
// BALANCE GEAR

    event.remove({id: 'wardenlootforge:sculk_helmet_smithing'})
    event.smithing('wardenlootforge:sculk_helmet', 'deeperdarker:warden_helmet', 'wardenlootforge:sculk_ingot')
    
    event.remove({id: 'wardenlootforge:sculk_chestplate_smithing'})
    event.smithing('wardenlootforge:sculk_chestplate', 'deeperdarker:warden_chestplate', 'wardenlootforge:sculk_ingot')
    
    event.remove({id: 'wardenlootforge:sculk_leggings_smithing'})
    event.smithing('wardenlootforge:sculk_leggings', 'deeperdarker:warden_leggings', 'wardenlootforge:sculk_ingot')
    
    event.remove({id: 'wardenlootforge:sculk_boots_smithing'})
    event.smithing('wardenlootforge:sculk_boots', 'deeperdarker:warden_boots', 'wardenlootforge:sculk_ingot')
    
    event.remove({id: 'wardenlootforge:sculk_sword_smithing'})
    event.smithing('wardenlootforge:sculk_sword', 'deeperdarker:warden_sword', 'wardenlootforge:sculk_ingot')
    
    event.remove({id: 'wardenlootforge:sculk_pickaxe_smithing'})
    event.smithing('wardenlootforge:sculk_pickaxe', 'deeperdarker:warden_pickaxe', 'wardenlootforge:sculk_ingot')
    
    event.remove({id: 'wardenlootforge:sculk_axe_smithing'})
    event.smithing('wardenlootforge:sculk_axe', 'deeperdarker:warden_axe', 'wardenlootforge:sculk_ingot')
    
    event.remove({id: 'wardenlootforge:sculk_hoe_smithing'})
    event.smithing('wardenlootforge:sculk_hoe', 'deeperdarker:warden_hoe', 'wardenlootforge:sculk_ingot')
    
    event.remove({id: 'wardenlootforge:sculk_shovel_smithing'})
    event.smithing('wardenlootforge:sculk_shovel', 'deeperdarker:warden_shovel', 'wardenlootforge:sculk_ingot')
    
    event.remove({id: 'deeperdarker:soul_elytra'})
	event.shaped(
	    Item.of('deeperdarker:soul_elytra'),
	    [
	       'CDC', 
	       'ABA',
	       'CEC'
	        ],
	        {A: 'deeperdarker:soul_dust',
	         B: 'minecraft:elytra',
	         C: 'deeperdarker:sculk_bone',
	         D: 'forbidden_arcanus:dark_nether_star_block',
	         E: 'deeperdarker:soul_crystal'
	        })
   
})