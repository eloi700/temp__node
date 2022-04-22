// MODULES IN NODE
// CommonJS, every file is module (by default)
// It is an Encapsulated Code (only share minimum)
// To start a module begin with . and /

const names = require('./4-names') // import
const sayHi = require('./5-utilities') // import
const data = require('./6-alt-flavor')
require('./7-mind-grenade');

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)