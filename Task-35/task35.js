console.log('====================================');
console.log("Animals: Think of at least three different animals that have a common characteristic. \nStore the names of these animals in a list, and then use a for loop to print out the name of each animal. \n\u2022 Modify your program to print a statement about each animal, such as A dog would make a great pet. \n\u2022 Add a line at the end of your program stating what these animals have in common. \nYou could print a sentence such as Any of these animals would make a great pet!\n");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var commonCharacteristic = "they are friendly pets";
var animals = ["Dog", "Cat", "Rabbit"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet because ").concat(commonCharacteristic.toLowerCase(), "."));
}
console.log("Any of these animals would make a great pet because ".concat(commonCharacteristic.toLowerCase(), "!"));
