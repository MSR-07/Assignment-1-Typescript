console.log('====================================');
console.log("\nCars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that\u2019s returned to make sure all the information was stored correctly.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
function createCar(_a) {
    var manufacturer = _a.manufacturer, model = _a.model, _b = _a.color, color = _b === void 0 ? "" : _b, _c = _a.features, features = _c === void 0 ? [] : _c;
    return { manufacturer: manufacturer, model: model, color: color, features: features };
}
var carInfo = createCar({ manufacturer: "Toyota", model: "Camry", color: "Blue", features: ["Sunroof", "GPS"] });
console.log(carInfo);
