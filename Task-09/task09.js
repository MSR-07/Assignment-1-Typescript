console.log('====================================');
console.log("Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var names = ["Ismail", "Zia", "Usama", "Nimra", "Arslan"];
// Print each person's name by accessing each element in the array
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
