//assignment no : 37
var size = ["medium", "large"];
var defaultMessage = "I love Typescript";
var mediumShirt = ("size of shirt is : ".concat(size[0], " , ").concat(defaultMessage));
var largeShirt = ("size of shirt is : ".concat(size[1], " , ").concat(defaultMessage));
var smallShirt = ("size of shirt is : small and i love painting");
var extraLarge = ("size of shirt is : extraLarge and i love para gliding");
function make_tshirt() {
    var simpleFunction = (mediumShirt);
    console.log(simpleFunction);
    return simpleFunction;
}
var responce = make_tshirt();
console.log(responce);
