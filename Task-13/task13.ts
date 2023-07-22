console.log('====================================');
console.log(`Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.`);
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');

let guests: string[] = ["Ali", "Usama", "usman"];
const unableToAttend: string = "Ali";
const newGuest: string = "Kashif";

const unableToAttendIndex: number = guests.indexOf(unableToAttend);

if (unableToAttendIndex !== -1) {
  // Remove the guest who can't attend and add the new guest
  guests.splice(unableToAttendIndex, 1, newGuest);
}

guests.forEach(guest => {
  console.log(`Dear ${guest}, you are invited to a dinner at my place. It would be an honor to have you there.`);
});
