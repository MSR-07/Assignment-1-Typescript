console.log('====================================');
console.log(`Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.`);
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');

const guests: string[] = ["Ali", "Usama", "usman"];

guests.forEach(guest => {
  console.log(`Dear ${guest}, you are invited to a dinner at my place. It would be an honor to have you there.`);
});
