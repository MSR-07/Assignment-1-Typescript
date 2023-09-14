
console.log('====================================');
console.log(`T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
`)
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');

function makeShirt(size: string, message: string): any {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}
makeShirt("Large", "I ❤ TypeScript");
