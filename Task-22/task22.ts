console.log('====================================');
console.log(
`Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program`);
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');

const countries: string[] = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "Japan"];

// Trying to access an index that is out of bounds
const indexOutOfBounds = countries[10];

// This line will not be executed due to the error, so you won't see "Reached this point."
console.log("Reached this point.");

// Correcting the error
const validIndex = 2;
const country = countries[validIndex];
console.log("Country at index 2:", country);
