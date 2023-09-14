var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log('====================================');
console.log("\nUnchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians\u2019 names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician\u2019s name.\n");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var originalMagicians = ["Herry Potter", "Draco", "Ron", "Ginny"];
function makeGreat(magiciansList) {
    var greatMagicians = [];
    for (var _i = 0, magiciansList_1 = magiciansList; _i < magiciansList_1.length; _i++) {
        var magician = magiciansList_1[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
function showMagicians(magiciansList) {
    console.log("Magicians:");
    for (var _i = 0, magiciansList_2 = magiciansList; _i < magiciansList_2.length; _i++) {
        var magician = magiciansList_2[_i];
        console.log(magician);
    }
}
var modifiedMagicians = makeGreat(__spreadArray([], originalMagicians, true));
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("\nModified Magicians:");
showMagicians(modifiedMagicians);
