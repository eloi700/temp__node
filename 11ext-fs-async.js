const { readFile, writeFile, write, writeFileSync } = require("fs");
console.log('start');

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

    const first = result;
    readFile("./content/second.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
        return;
    }

    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here's the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting the next task');

//result is
/*
start
starting the next task
done with this task
*/

// When the async function is called, it returns with a Promise . When the async function returns a value, the Promise gets fulfilled, if the async function throws an error, it gets rejected. The await keyword can be used to wait for a Promise to be resolved and returns the fulfilled value.

