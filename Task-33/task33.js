console.log('====================================');
console.log("Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.\n\u2022 Store the numbers 1 through 9 in a array.\n\n\u2022 Loop through the array.\n\n\u2022 Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read \"1st 2nd 3rd 4th 5th 6th 7th 8th 9th\", and each result should be on a separate line.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    var ordinal = void 0;
    if (num === 1) {
        ordinal = "st";
    }
    else if (num === 2) {
        ordinal = "nd";
    }
    else if (num === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(num).concat(ordinal));
}
