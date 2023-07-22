// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
// Storing the person's name in a variable
var personName = "Muhammad Saif ur Rehman";
// Printing the name in lowercase
console.log("Lowercase:", personName.toLowerCase());
// Printing the name in uppercase
console.log("Uppercase:", personName.toUpperCase());
// Function to convert a string to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// Printing the name in title case
console.log("Titlecase:", toTitleCase(personName));
