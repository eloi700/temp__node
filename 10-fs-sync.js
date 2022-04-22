/*----------------BUILT IN MODULES-------------*/
// INTERACTING with FILE SYSTEM -   fs Module
// Flavors of File Module - Asynchronous (Non-Blocking) or Synchronous (Blocking)

//Synchronous (Blocking)
// ---first Method (readFileSync) ----second Method (writeFileSync)
const { readFileSync, writeFileSync } = require("fs");

// To read - need 2 parameters (path & the encoding)
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, "\n", second);
//returns Hello this is the first text file.
// Hello this is the second text file.

//---Creating New File
writeFileSync('./content/result-sync.txt', `Here's the result: ${first}, ${second}`)
// returns - combi of txt found in first & second txt files.

//---To APPEND the text File (result-sync.txt)
writeFileSync(
  "./content/result-sync.txt",
  `Here's the result: ${first}, ${second}`, {flag: 'a'}
);
