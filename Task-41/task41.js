console.log('====================================');
console.log("\nMagicians: Make a array of magician\u2019s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.\n");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var magicians = ["Herry Potter", "Draco", "Ron", "Ginny"];
function showMagicians(magiciansList) {
    console.log("Magicians:");
    for (var _i = 0, magiciansList_1 = magiciansList; _i < magiciansList_1.length; _i++) {
        var magician = magiciansList_1[_i];
        console.log(magician);
    }
}
showMagicians(magicians);
