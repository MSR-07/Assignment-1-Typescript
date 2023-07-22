console.log('====================================');
console.log(
    `Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.`
);
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');


let guests: string[] = ["Qasim", "Awais", "Rana", "Ismail", "Arslan", "Daud"];

// Informing about the situation
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two guests.");

// Remove guests until only two names remain
while (guests.length > 2) {
  const removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a new set of invitation messages for the two remaining guests
console.log(`\nDear ${guests[0]}, you are still invited to a dinner at my place. Looking forward to seeing you there.`);
console.log(`Dear ${guests[1]}, you are still invited to a dinner at my place. Looking forward to seeing you there.`);

// Print the number of people you are inviting to dinner
console.log("\nNumber of people invited to dinner:", guests.length);
