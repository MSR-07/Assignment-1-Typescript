console.log('====================================');
console.log("Start with your program from Task 13. Add a print statement at the end of your program stating the name of the guest who can\u2019t make it.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var guests = ["Ali", "Usama", "usman"];
var unableToAttend = "Ali";
var newGuest = "Kashif";
var unableToAttendIndex = guests.indexOf(unableToAttend);
if (unableToAttendIndex !== -1) {
    // Remove the guest who can't attend and add the new guest
    guests.splice(unableToAttendIndex, 1, newGuest);
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to a dinner at my place. It would be an honor to have you there."));
});
// Print the name of the guest who can't make it
console.log("Unfortunately, ".concat(unableToAttend, " can't make it to the dinner."));
