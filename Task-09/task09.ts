console.log('====================================');
console.log("Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.");
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');

const names: string[] = ["Ismail", "Zia", "Usama", "Nimra", "Arslan"];

// Print each person's name by accessing each element in the array
for (const name of names) {
  console.log(name);
}
