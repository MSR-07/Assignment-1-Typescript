console.log('====================================');
console.log("Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var guests = ["Qasim", "Awais", "Rana", "Ismail", "Arslan", "Daud"];
// Informing about the situation
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two guests.");
// Remove guests until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print a new set of invitation messages for the two remaining guests
console.log("\nDear ".concat(guests[0], ", you are still invited to a dinner at my place. Looking forward to seeing you there."));
console.log("Dear ".concat(guests[1], ", you are still invited to a dinner at my place. Looking forward to seeing you there."));
// Print the number of people you are inviting to dinner
console.log("\nNumber of people invited to dinner:", guests.length);
