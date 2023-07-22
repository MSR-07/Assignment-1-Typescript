console.log('====================================');
console.log(`Start with your program from Task 13. Add a print statement at the end of your program stating the name of the guest who can’t make it.`);
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

// Print the name of the guest who can't make it
console.log(`Unfortunately, ${unableToAttend} can't make it to the dinner.`);