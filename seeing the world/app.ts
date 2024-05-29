//assihnment no 18


let places: string [] = [`Sawaat` , `Makka` , `Paris` , `Istanmbol`];

//print my array in its original order
console.log(`original ` + places);

//print my array in alphabetical order without modifying the actual list.

console.log(`copy ` + [...places].sort());

//print my array is still in its actual order by printing it.

console.log(`original ` + places);

//print my array in reverse alphabetical order without changing the actual order.

console.log(`copy ` + [...places].sort().reverse());

//showing that my array is still in its original order by printing it again.

console.log(`copy ` + [...places].sort().reverse());

//reverse the order of my list . print the array to show that its order has change.

console.log(`copy ` + [...places].sort());

//reverse the order of my list . print the list to show its back to its original order.

console.log(`copy ` + [...places].sort().reverse());

//sort my array so it is store in alphabetical oreder. print the array to show that its order has been changed.

console.log(`copy ` + [...places].sort());
