console.log('====================================');
console.log(`Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”`);
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');

const modesOfTransportation: string[] = ["car", "motorcycle", "bicycle", "scooter", "boat"];

modesOfTransportation.forEach(transportation => {
  console.log(`I would like to own a ${transportation}.`);
});
