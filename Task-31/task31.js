console.log('====================================');
console.log("No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.\n\u2022 If the list is empty, print the message We need to find some users!\n\n\u2022 Remove all of the usernames from your array, and make sure the correct message is printed.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
// Make an array of usernames
var usernames = ["admin", "Eric", "Alice", "Bob", "John"];
// Check if the user list is not empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print greetings
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
    // Remove all usernames from the array
    usernames.length = 0;
    // Check if the user list is empty now
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    }
}
