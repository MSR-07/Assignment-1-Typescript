console.log('====================================');
console.log("\nGreat Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician\u2019s name. Call show_magicians() to see that the list has actually been modified.\n");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var magicians = ["Herry Potter", "Draco", "Ron", "Ginny"];
// Function to show magicians
function showMagicians(magiciansList) {
    console.log("Magicians:");
    for (var _i = 0, magiciansList_1 = magiciansList; _i < magiciansList_1.length; _i++) {
        var magician = magiciansList_1[_i];
        console.log(magician);
    }
}
// Function to make magicians great
function makeGreat(magiciansList) {
    var greatMagicians = [];
    for (var _i = 0, magiciansList_2 = magiciansList; _i < magiciansList_2.length; _i++) {
        var magician = magiciansList_2[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
// Call the makeGreat function to modify the array of magicians
var greatMagicians = makeGreat(magicians);
// Call the showMagicians function to see the modified list
showMagicians(greatMagicians);
