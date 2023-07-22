console.log('====================================');
console.log(`Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.`)
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');


let alien_color: string = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down a green alien!");
} else {
  console.log("Congratulations! You just earned 10 points for shooting down an alien of a color other than green!");
}
let alien_color1: string = 'red';

if (alien_color1 === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down a green alien!");
} else {
  console.log("Congratulations! You just earned 10 points for shooting down an alien of a color other than green!");
}

