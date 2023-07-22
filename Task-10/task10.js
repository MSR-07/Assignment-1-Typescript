console.log('====================================');
console.log("Greetings: Start with the array you used in Exercise 11, but instead of just printing each person\u2019s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person\u2019s name.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var names = ["Ismail", "Zia", "Usama", "Nimra", "Arslan"];
// Print each person's name by accessing each element in the array
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ", hope you're having a great day!"));
}
