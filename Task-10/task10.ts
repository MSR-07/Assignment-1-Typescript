console.log('====================================');
console.log(`Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.`);
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');


const names: string[] = ["Ismail", "Zia", "Usama", "Nimra", "Arslan"];

// Print each person's name by accessing each element in the array
for (const name of names) {
    console.log(`Hello ${name}, hope you're having a great day!`);
}
