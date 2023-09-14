console.log('====================================');
console.log("\nCities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.\n");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
function describeCity(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity("Karachi", "Pakistan");
describeCity("New York", "USA");
describeCity("Sydney");
