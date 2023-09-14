console.log('====================================');
console.log(`
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
`)
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');

const magicians: string[] = ["Herry Potter", "Draco", "Ron", "Ginny"];

// Function to show magicians
function showMagicians(magiciansList: string[]): void {
    console.log("Magicians:");
    for (const magician of magiciansList) {
        console.log(magician);
    }
}

// Function to make magicians great
function makeGreat(magiciansList: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magiciansList) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}

// Call the makeGreat function to modify the array of magicians
const greatMagicians = makeGreat(magicians);

// Call the showMagicians function to see the modified list
showMagicians(greatMagicians);
