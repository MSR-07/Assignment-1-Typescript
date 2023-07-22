console.log('====================================');
console.log("Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as \u201CI would like to own a Honda motorcycle.\u201D");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var modesOfTransportation = ["car", "motorcycle", "bicycle", "scooter", "boat"];
modesOfTransportation.forEach(function (transportation) {
    console.log("I would like to own a ".concat(transportation, "."));
});
