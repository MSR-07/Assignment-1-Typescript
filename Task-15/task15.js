console.log('====================================');
console.log("Start with your program from Task 13. Print a second set of invitation messages, one for each person who is still in your list.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var guests = ["Ali", "Usama", "usman"];
var unableToAttend = "Ali";
var newGuest = "Kashif";
console.log("First Set of Invitations:");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to a dinner at my place. It would be an honor to have you there."));
});
var unableToAttendIndex = guests.indexOf(unableToAttend);
if (unableToAttendIndex !== -1) {
    // Remove the guest who can't attend and add the new guest
    guests.splice(unableToAttendIndex, 1, newGuest);
}
console.log("Second Set of Invitations:");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to a dinner at my place. It would be an honor to have you there."));
});
