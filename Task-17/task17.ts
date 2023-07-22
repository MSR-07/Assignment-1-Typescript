console.log('====================================');
console.log(`Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.`);
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');


let guests: string[] = ["nasir", "Usama", "usman"];
// Informing about the situation
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two guests.");

// Remove guests until only two names remain
while (guests.length > 2) {
  const removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print messages to the two remaining guests
console.log(`\nDear ${guests[0]}, you are still invited to a dinner at my place. Looking forward to seeing you there.`);
console.log(`Dear ${guests[1]}, you are still invited to a dinner at my place. Looking forward to seeing you there.`);

// Remove the last two names from the list to have an empty list
guests.pop();
guests.pop();

// Print the list to verify it's empty
console.log("\nRemaining Guests:", guests);
