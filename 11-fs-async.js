/*----------------BUILT IN MODULES-------------*/
// Asynchronous (Non-Blocking) File System - fs Module

const { readFile, writeFile, write, writeFileSync } = require("fs");

//Here needs to provide a Callback function with Parameter - to run it when things are done same as how event listener happened
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  //     console.log(result);
  // })

  //result <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 2e>
  // text didn't show up - utf8 coding is required to see right text result.
  //After providing the utf8 Coding
  //----result now is Hello this is the first text file.

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
        console.log(result);
      }
    );
  });
});
