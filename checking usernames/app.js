//assignment no : 32
var current_users = ["ali", "talha", "kasim", "hamza", "usman"];
var new_users = ["Ali"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_users, " is available."));
    }
});
