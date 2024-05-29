//assignment no : 43
//assignment no : 42

//deine the function to show magicians names

function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

//define an array of magicians names

let magicians_names = ["Ashley", "Brad", "Chris", "Diana", "Eric"];

//making a copy of original array through .slice() functions
let copy_magician_names = magicians_names.slice()

//modify the copied array to include "the great" with their names

let copy_great_magicians = make_great(copy_magician_names);

//show both arrays original and copied

show_magicians(magicians_names);

//copied

show_magicians(copy_great_magicians);