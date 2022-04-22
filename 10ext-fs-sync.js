const { readFileSync, writeFileSync } = require("fs");
console.log('start');
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync('./content/result-sync.txt', `Here's the result: ${first}, ${second}`)
writeFileSync(
  "./content/result-sync.txt",
  `Here's the result: ${first}, ${second}`, {flag: 'a'}
);

console.log('done with this task');
console.log('starting the next one');

// returns - which means . . .
// Note - Synchronous executes the code in sequence, line by line, one line at a time.  Each time a function is called, the program execution waits until that function returns before continuing to the next line of the code.
/*
start
done with this task
starting the next one
*/