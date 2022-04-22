//npm - global command, comes with node
//npm --version or npm --v (check the npm version)

/*------------------------------------------------------*/
//Local dependency - use it only in this particular project
//npm i <packageName> (for installation)

/*------------------------------------------------------*/
//Global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (for mac)

/*------------------------------------------------------*/
//package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (set up everything Default)

const __ = require('lodash')

const items = [1, [2, [3, [4]]]] // lodash flattenDeep Method
const newItems = __.flattenDeep(items)
console.log(newItems); //returns [ 1, 2, 3, 4 ] after running node app.js