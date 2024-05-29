//assignment no : 44
//define a function with rest parameter that accepts items arguments representing our sandwiches
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking the sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now enjoy your sandwich\n");
}
//call the function 3 items with three different numbers of items
makeSandwich("bread", "chicken", "cheese", "lettuce");
makeSandwich("bread", "egg", "cheese", "lettuce", "tomato");
makeSandwich("bread", "potato patty", "cheese", "lettuce", "tomato", "onion");
