console.log('====================================');
console.log("Intentional Error: If you haven\u2019t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "Japan"];
// Trying to access an index that is out of bounds
var indexOutOfBounds = countries[10];
// This line will not be executed due to the error, so you won't see "Reached this point."
console.log("Reached this point.");
// Correcting the error
var validIndex = 2;
var country = countries[validIndex];
console.log("Country at index 2:", country);
