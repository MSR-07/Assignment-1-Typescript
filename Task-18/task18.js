var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log('====================================');
console.log("Seeing the World: Think of at least five places in the world you\u2019d like to visit.\n\u2022 Store the locations in a array. Make sure the array is not in alphabetical order.\n\n\u2022 Print your array in its original order.\n\n\u2022 Print your array in alphabetical order without modifying the actual list.\n\n\u2022 Show that your array is still in its original order by printing it.\n\n\u2022 Print your array in reverse alphabetical order without changing the order of the original list.\n\n\u2022 Show that your array is still in its original order by printing it again.\n\n\u2022 Reverse the order of your list. Print the array to show that its order has changed.\n\n\u2022 Reverse the order of your list again. Print the list to show it\u2019s back to its original order.\n\n\u2022 Sort your array so it\u2019s stored in alphabetical order. Print the array to show that its order has been changed.\n\n\u2022 Sort to change your array so it\u2019s stored in reverse alphabetical order. Print the list to show that its order has changed.");
console.log("Author:[Muhammad Saif ur Rehman]");
var currentDate = new Date().toDateString();
console.log("Date:", currentDate);
console.log('====================================');
var placesToVisit = ["Paris", "Tokyo", "Venice", "New York", "Barcelona"];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order:", __spreadArray([], placesToVisit.sort(), true));
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);
// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit.sort().reverse(), true));
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the list again to get back to its original order
placesToVisit.reverse();
console.log("Original Order (restored):", placesToVisit);
// Sort the array in alphabetical order (changes the original list)
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
// Sort the array in reverse alphabetical order (changes the original list)
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
