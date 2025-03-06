// 5. JavaScript Modules

// ES6 Modules (import/export)
//#Export multiple values from a module.Must use the same name when importing.

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

import { add, subtract } from './math.js';

console.log(add(5, 3));       
console.log(subtract(5, 3));  

// CommonJS
//#CommonJS is the default module system in Node.js, using require() for importing and module.exports for exporting.

module.exports = function greet(name) {
    return `Hello, ${name}!`;
};

const greet = require("./greet");

console.log(greet("Alice"));