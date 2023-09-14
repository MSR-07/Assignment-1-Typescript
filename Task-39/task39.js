console.log('====================================');
console.log("\nCity Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:\n\n\"Lahore, Pakistan\"\n\nCall your function with at least three city-country pairs, and print the value that\u2019s returned.\n");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
var city1 = cityCountry("Lahore", "Pakistan");
var city2 = cityCountry("Paris", "France");
var city3 = cityCountry("New York", "USA");
console.log(city1);
console.log(city2);
console.log(city3);
