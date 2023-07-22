// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Store a person's name with whitespace at the beginning and end
var nameWithWhitespace = "\t   \n  John Doe  \t   \n";
// Print the name with whitespace
console.log("Name with whitespace:");
console.log(nameWithWhitespace);
// Strip whitespace from the name
var strippedName = nameWithWhitespace.trim();
// Print the name after stripping whitespace
console.log("\nName after stripping whitespace:");
console.log(strippedName);
