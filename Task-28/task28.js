console.log('====================================');
console.log("Stages of Life: Write an if-else chain that determines a person\u2019s stage of life. Set a value for the variable age, and then:\n\u2022 If the person is less than 2 years old, print a message that the person is a baby.\n\n\u2022 If the person is at least 2 years old but less than 4, print a message that the person is a toddler.\n\n\u2022 If the person is at least 4 years old but less than 13, print a message that the person is a kid.\n\n\u2022 If the person is at least 13 years old but less than 20, print a message that the person is a teenager.\n\n\u2022 If the person is at least 20 years old but less than 65, print a message that the person is an adult.\n\n\u2022 If the person is age 65 or older, print a message that the person is an elder.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var age = 23;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
