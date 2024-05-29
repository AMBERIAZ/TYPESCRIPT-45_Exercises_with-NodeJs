//assignment no : 44

//define a function with rest parameter that accepts items arguments representing our sandwiches

function makeSandwich(...items: string[]){
    console.log("\nmaking the sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\n Now enjoy your sandwich\n");
}

//call the function 3 items with three different numbers of items

makeSandwich("bread", "chicken", "cheese","lettuce");
makeSandwich("bread", "egg", "cheese","lettuce","tomato");
makeSandwich("bread", "potato patty", "cheese","lettuce","tomato","onion");

