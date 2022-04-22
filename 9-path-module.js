/*----------------BUILT IN MODULES-------------*/
// PATH Module
const path = require('path')
console.log(path.sep); // a separator property returns \

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath); //returns \content\subfolder\test.txt

//Accessing the Base Name - text.txt
const base = path.basename(filePath)
console.log(base); //returns test.txt

//Accepts a sequence of paths or path segments and resolves into Absolute Path - path.resolve

const absolute = path.resolve (__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);
//returns D:\WEBDEV-FREECODECAMP\Node-ExpressJS\content\subfolder\test.txt