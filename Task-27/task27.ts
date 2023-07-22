console.log(`Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.`)
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');



let alien_color: string = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down a green alien!");
} else if (alien_color === 'yellow') {
  console.log("Congratulations! You just earned 10 points for shooting down a yellow alien!");
} else if (alien_color === 'red') {
  console.log("Congratulations! You just earned 15 points for shooting down a red alien!");
} else {
  console.log("Unknown alien color. No points earned.");
}


let alien_color1: string = 'yellow';

if (alien_color1 === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down a green alien!");
} else if (alien_color1 === 'yellow') {
  console.log("Congratulations! You just earned 10 points for shooting down a yellow alien!");
} else if (alien_color1 === 'red') {
  console.log("Congratulations! You just earned 15 points for shooting down a red alien!");
} else {
  console.log("Unknown alien color. No points earned.");
}


let alien_color3: string = 'red';

if (alien_color3 === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting down a green alien!");
} else if (alien_color3 === 'yellow') {
  console.log("Congratulations! You just earned 10 points for shooting down a yellow alien!");
} else if (alien_color3 === 'red') {
  console.log("Congratulations! You just earned 15 points for shooting down a red alien!");
} else {
  console.log("Unknown alien color. No points earned.");
}
