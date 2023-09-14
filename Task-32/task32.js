console.log('====================================');
console.log("Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.\n\u2022 Make a list of five or more usernames called current_users.\n\n\u2022 Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.\n\n\u2022 Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.\n\n\u2022 Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var currentUsers = ["Eric", "Alice", "Bob", "John", "admin"];
var newUsers = ["alice", "David", "John", "Sarah", "Mike"];
var _loop_1 = function (newUser) {
    var isUsernameTaken = currentUsers.some(function (currentUsername) { return currentUsername.toLowerCase() === newUser.toLowerCase(); });
    if (isUsernameTaken) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please choose a different username."));
    }
    else {
        console.log("Congratulations! The username '".concat(newUser, "' is available."));
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
