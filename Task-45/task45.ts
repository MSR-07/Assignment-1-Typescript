console.log('====================================');
console.log(`
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.`)
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
interface CarInfo {
    manufacturer: string;
    model: string;
    color?: string;
    features?: string[];
}

function createCar({ manufacturer, model, color = "", features = [] }: CarInfo): CarInfo {
    return { manufacturer, model, color, features };
}

const carInfo = createCar({ manufacturer: "Toyota", model: "Camry", color: "Blue", features: ["Sunroof", "GPS"] });
console.log(carInfo);


