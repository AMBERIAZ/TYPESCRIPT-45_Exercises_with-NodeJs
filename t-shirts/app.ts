//assignment no :36

let sizeofShirt: string[] =['small', 'medium', 'large']
let shirt1= "This shirt is for casual wearing"
let shirt2= "This shirt is for formal wearing"
let shirt3= "This shirt is for party wearing"
 function make_shirt() {
    let simpleFunction = `This is a ${sizeofShirt[0] } shirt, and ${shirt1}`
    console.log(simpleFunction)
    return simpleFunction
}
let responce = make_shirt()
console.log(responce);



