//assignment no : 43
//assignment no : 42
//deine the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array of magicians names
var magicians_names = ["Ashley", "Brad", "Chris", "Diana", "Eric"];
//making a copy of original array through .slice() functions
var copy_magician_names = magicians_names.slice();
//modify the copied array to include "the great" with their names
var copy_great_magicians = make_great(copy_magician_names);
//show both arrays original and copied
show_magicians(magicians_names);
//copied
show_magicians(copy_great_magicians);
