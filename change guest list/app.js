//assignment no 15
var guest_list = ["usman", "ali", "kamran", "janita"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear" + guest_list[i] + "\n\n you are invited for a dinner tomorrow. \n\nThank you \n");
}
var not_coming = "usman";
var new_guest = " Laila";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\n you are invited for a dinner tomorrow. \n\nThank you \n\n"));
}
console.log("Mr ".concat(not_coming, ", is not coming for dinner tomorrow."));
