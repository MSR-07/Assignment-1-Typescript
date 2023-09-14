console.log('====================================');
console.log("Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.\n\u2022 Store the numbers 1 through 9 in a array.\n\n\u2022 Loop through the array.\n\n\u2022 Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read \"1st 2nd 3rd 4th 5th 6th 7th 8th 9th\", and each result should be on a separate line.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var favoritePizzas = ["Pepperoni", "Margherita", "Supreme"];
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
