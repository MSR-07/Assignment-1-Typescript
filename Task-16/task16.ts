console.log('====================================');
console.log(`More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list`);
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');

let guests: string[] = ["nasir", "Usama", "usman"];

// Informing about the bigger dinner table
console.log("We found a bigger dinner table!");

// Adding new guests
guests.unshift("Ali"); // Adding at the beginning
guests.splice(2, 0, "Qasim"); // Adding in the middle
guests.push("Ahsan"); // Adding at the end

// Print a new set of invitation messages
console.log("\nNew Set of Invitations:");
guests.forEach(guest => {
  console.log(`Dear ${guest}, you are invited to a dinner at my place. Looking forward to seeing you there.`);
});
