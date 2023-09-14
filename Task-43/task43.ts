console.log('====================================');
console.log(`
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
`)
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');

const originalMagicians: string[] = ["Herry Potter", "Draco", "Ron", "Ginny"];
function makeGreat(magiciansList: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magiciansList) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}

function showMagicians(magiciansList: string[]): void {
    console.log("Magicians:");
    for (const magician of magiciansList) {
        console.log(magician);
    }
}

const modifiedMagicians = makeGreat([...originalMagicians]);
console.log("Original Magicians:");
showMagicians(originalMagicians);

console.log("\nModified Magicians:");
showMagicians(modifiedMagicians);
