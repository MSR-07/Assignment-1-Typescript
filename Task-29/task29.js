console.log('====================================');
console.log(`Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!`);
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
// Make an array of your three favorite fruits
const favoriteFruits = ["apples", "bananas", "strawberries"];
// Write five if statements to check for specific fruits
if (favoriteFruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favoriteFruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favoriteFruits.includes("strawberries")) {
    console.log("You really like strawberries!");
}
if (favoriteFruits.includes("kiwis")) {
    console.log("You really like kiwis!");
}
else {
    console.log("You don't like kiwis.");
}
if (favoriteFruits.includes("pears")) {
    console.log("You really like pears!");
}
else {
    console.log("You don't like pears.");
}
