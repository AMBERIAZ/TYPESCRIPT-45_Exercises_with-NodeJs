//assignment no : 37
let size: string[] = ["medium", "large"]
let defaultMessage = "I love Typescript"
let mediumShirt = (`size of shirt is : ${size[0]} , ${defaultMessage}`)
let largeShirt = (`size of shirt is : ${size[1]} , ${defaultMessage}`)

let smallShirt = (`size of shirt is : small and i love painting`)
let extraLarge = (`size of shirt is : extraLarge and i love para gliding`)



function make_tshirt(){
    let simpleFunction = (mediumShirt)
    console.log(simpleFunction)
    return simpleFunction
}

let responce = make_tshirt()
console.log(responce)
