// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Lowering Tier

ServerEvents.recipes(event => {
    	event.recipes.createCutting([
		'32x dotcoinmod:copper_coin'
	], 'dotcoinmod:iron_coin').processingTime(100)

    	event.recipes.createCutting([
		'32x dotcoinmod:iron_coin'
	], 'dotcoinmod:gold_coin').processingTime(150)

    	event.recipes.createCutting([
		'32x dotcoinmod:gold_coin'
	], 'dotcoinmod:platinum_coin').processingTime(200)

//Raising Tier

    	event.recipes.createMechanicalCrafting(
		"dotcoinmod:platinum_coin",[
		 " CCCC ",
		 "CCCCCC",
		 "CCCCCC",
		 "CCCCCC",
		 "CCCCCC",
		 " CCCC "
	], {
	    C: "dotcoinmod:gold_coin"})
	
    	event.recipes.createMechanicalCrafting(
		"dotcoinmod:gold_coin",[
		 " CCCC ",
		 "CCCCCC",
		 "CCCCCC",
		 "CCCCCC",
		 "CCCCCC",
		 " CCCC "
	], {
	    C: "dotcoinmod:iron_coin"})
	
    	event.recipes.createMechanicalCrafting(
		"dotcoinmod:iron_coin",[
		 " CCCC ",
		 "CCCCCC",
		 "CCCCCC",
		 "CCCCCC",
		 "CCCCCC",
		 " CCCC "
	], {
	    C: "dotcoinmod:copper_coin"})
	
})