console.log('====================================');
console.log("Changing Guest List: You just heard that one of your guests can\u2019t make the dinner, so you need to send out a new set of invitations. You\u2019ll have to think of someone else to invite.");
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
