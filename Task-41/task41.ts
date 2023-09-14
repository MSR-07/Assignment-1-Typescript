console.log('====================================');
console.log(`
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
`)
console.log(`Author:[Muhammad Saif ur Rehman]`);
const currentDate: string = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');

const magicians: string[] = ["Herry Potter", "Draco", "Ron", "Ginny"];

function showMagicians(magiciansList: string[]): void {
    console.log("Magicians:");
    for (const magician of magiciansList) {
        console.log(magician);
    }
}
showMagicians(magicians);
