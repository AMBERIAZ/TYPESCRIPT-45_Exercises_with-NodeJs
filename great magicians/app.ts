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

let great_magicians = make_great(magicians_names);

console.log(great_magicians);