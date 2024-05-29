//assignment no 16

let guest_list: string[] = [`usman` , `ali` , `kamran` , `janita`];
let not_coming: string = `usman`;
let new_guest: string = `Laila`;
guest_list[0] = new_guest;

for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}\n\n you are invited for a dinner tomorrow. \n\nThank you \n\n`);
}
console.log(`Mr ${not_coming}, is not coming for the dinner tomorrow.`);

guest_list.unshift(`Ayesha`);
guest_list.splice(guest_list.length/2, 2, "Maryam");
guest_list.push("Fizza");

for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}\n\n you are invited for a dinner tomorrow. \n\nThank you \n\n`);
}
console.log(`We have found a bigger dinner table so we invited more guests.`);