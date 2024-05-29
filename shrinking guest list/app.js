//assignment no 17
var guest_list = ["usman", "ali", "kamran", "janita"];
var not_coming = "usman";
var new_guest = "Laila";
guest_list[0] = new_guest;
//for (let i=0; i<guest_list.length; i++){
// console.log(`Dear ${guest_list[i]}\n\n you are invited for a dinner tomorrow. \n\nThank you \n\n`);
//}
//console.log(`Mr ${not_coming}, is not coming for the dinner tomorrow.`);
guest_list.unshift("Ayesha");
guest_list.splice(guest_list.length / 2, 2, "Maryam");
guest_list.push("Fizza");
//for (let i=0; i<guest_list.length; i++){
// console.log(`Dear ${guest_list[i]}\n\n you are invited for a dinner tomorrow. \n\nThank you \n\n`);
//}
//console.log(`We have found a bigger dinner table so we invited more guests.`);
console.log("\n\nUnfortunately we are out of space , so we have space for only two persons.\n\n");
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("Dear ".concat(removed_guest, ",\n\n you are not invited for a dinner tomorrow. \n\nThank you \n\n"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\n you are still invited for a dinner tomorrow. \n\nThank you \n\n"));
}
guest_list.splice(0, 2);
console.log(guest_list);
//all above comments are from previous assignment ,and i copy paste here so, i can easily shrink my guest list
