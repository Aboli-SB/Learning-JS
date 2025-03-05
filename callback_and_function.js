//callback function
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); 
}

function afterGreet() {
    console.log("Welcome to JavaScript!");
}

greet("Alice", afterGreet);

//map
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);

console.log(squared);

//filter
const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(num => num % 2 === 0);

console.log(evenNumbers); 

//reduce
const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce((acc, num) => acc + num, 0);

console.log(sum); 


