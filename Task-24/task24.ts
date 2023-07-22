console.log('====================================');
console.log(`More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array`);
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');




let myName: string = 'MSR';
let city: string = 'New York';
let age: number = 30;
let temperature: number = 25;
let languages: string[] = ['English', 'Spanish', 'French'];
let fruitBasket: string[] = ['apple', 'banana', 'orange'];

console.log("Is myName == 'MSR'? I predict True.");
console.log(myName == 'MSR');

console.log("Is myName == 'Bob'? I predict False.");
console.log(myName == 'Bob');

console.log("Is age >= 18? I predict True.");
console.log(age >= 18);

console.log("Is age < 21? I predict True.");
console.log(age < 21);

console.log("Is age === 30? I predict True.");
console.log(age === 30);

console.log("Is age !== 25? I predict True.");
console.log(age !== 25);

console.log("Is city lowercase 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');

console.log("Is myName === 'MSR' and age === 30? I predict True.");
console.log(myName === 'MSR' && age === 30);

console.log("Is myName === 'MSR' or city === 'Faisalabad'? I predict True.");
console.log(myName === 'MSR' || city === 'Faisalabad');

// console.log("Is 'Spanish' in languages? I predict True.");
// console.log(languages.includes('Spanish'));

// console.log("Is 'grape' not in fruitBasket? I predict True.");
// console.log(!fruitBasket.includes('grape'));
