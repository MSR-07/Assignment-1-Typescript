console.log('====================================');
console.log("Start with your program from Task 13. Print a second set of invitation messages, one for each person who is still in your list.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var guests = ["nasir", "Usama", "usman"];
// Informing about the bigger dinner table
console.log("We found a bigger dinner table!");
// Adding new guests
guests.unshift("Ali"); // Adding at the beginning
guests.splice(2, 0, "Qasim"); // Adding in the middle
guests.push("Ahsan"); // Adding at the end
// Print a new set of invitation messages
console.log("\nNew Set of Invitations:");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to a dinner at my place. Looking forward to seeing you there."));
});
