// GLOBALS VARIABLES - NO WINDOW !!!

// __dirname - path to current directory
// __filename - file name
//  require - function to use modules (CommonJS)
//  module - info about current module (file)
// process - info about env where the program is being executed

// console.log(__dirname)
// setInterval(() => {
//    console.log('hello world')
// }, 1000);

console.log('Hello World');

const os = require('os');
const path = require('path')

console.log(os.version())
console.log(os.type())
console.log(os.homedir())
console.log(__filename)
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))