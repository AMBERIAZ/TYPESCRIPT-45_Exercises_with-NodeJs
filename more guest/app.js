//assignment no 16
var guest_list = ["usman", "ali", "kamran", "janita"];
var not_coming = "usman";
var new_guest = "Laila";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\n you are invited for a dinner tomorrow. \n\nThank you \n\n"));
}
console.log("Mr ".concat(not_coming, ", is not coming for the dinner tomorrow."));
guest_list.unshift("Ayesha");
guest_list.splice(guest_list.length / 2, 2, "Maryam");
guest_list.push("Fizza");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\n you are invited for a dinner tomorrow. \n\nThank you \n\n"));
}
console.log("We have found a bigger dinner table so we invited more guests.");
