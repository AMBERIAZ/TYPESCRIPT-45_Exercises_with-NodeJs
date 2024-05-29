//assignment no 24

let car: string = "Subaru";
let age : number = 27;
let numbers : number[] = [3, 6, 9, 12, 15, 18];

///string test
//true test
console.log("Is car == 'Subaru'? I predict true.");
console.log(car == "Subaru"); //true

//false test

console.log("Is car == 'Toyota'? I predict false.");
console.log(car == "Toyota"); //false

//lowercase functions case
//true test

console.log("Is car.toLowerCase() =='subaru'? I predict true.");
console.log(car.toLowerCase() == "subaru"); //true

//false test

console.log("Is car.toLowerCase() == 'toyota'? I predict false.");
console.log(car.toLowerCase() == "toyota"); //false

//numerical test
//equality and inequality

console.log("Is age == 27? I predict true.");
console.log(age == 27); //true

console.log("Is age == 28? I predict false.");
console.log(age == 28); //false

//greater than and less than

console.log("Is age > 26? I predict true.");
console.log(age > 26); //true

console.log("Is age < 24? I predict false.");
console.log(age < 24); //false


//greater than or equal to and less than or equal to

console.log("Is age >= 27? I predict true.");
console.log(age >= 27); //true

console.log("Is age <= 22? I predict false.");
console.log(age <= 22); //false

//'and' 'or' operator  test
//true test with "and" operator

console.log("Is car == 'Subaru' and age == 27? I predict true.");
console.log(car == "Subaru" && age == 27); //true

//false test with "or" operator

console.log("Is car == 'Toyota' or age == 28? I predict false.");
console.log(car == "Toyota" || age == 28); //false



//test whether an item is in array
//true test

console.log("Is 9 in numbers? I predict true.");
console.log(9 in numbers); //true

//false test

console.log("Is 19 in numbers? I predict false.");
console.log(19 in numbers); //false