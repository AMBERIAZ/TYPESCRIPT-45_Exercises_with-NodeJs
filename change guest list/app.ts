//assignment no 15

let guest_list: string[] = [`usman` , `ali` , `kamran` , `janita`];
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear` + guest_list[i] + `\n\n you are invited for a dinner tomorrow. \n\nThank you \n`);
}

let not_coming: string = `usman`;
let new_guest: string = ` Laila`;
guest_list[0] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}\n\n you are invited for a dinner tomorrow. \n\nThank you \n\n`);
}

console.log(`Mr ${not_coming}, is not coming for dinner tomorrow.`);
