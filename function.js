// Function Declaration 
greet("Alice"); 
function greet(name) {
    console.log(`Hello, ${name}!`);
}

//function Expression
//sayHello("Bob"); 
const sayHello = function(name) {
    console.log(`Hello, ${name}!`);
};

//Arrow function
const greeting = (name) => {
    return `Hello, ${name}!`;
};
console.log(greeting("Alice"));

//Default Parameter
function greet(name = "Hello Everyone!!!") {
    console.log(`Hello, ${name}!`);
}

greet();         
greet("Alice");

//Rest and Spread 
//Spread
const numbers = [1, 2, 3, 50, 12]
const maxNum = Math.max(...numbers);
console.log(maxNum);

//Rest
const printHighestScore = (name, ...scores) => {
    const highestScore = Math.max(...scores);
    console.log(`${name}'s highest score is ${highestScore}`);
  }
  
  printHighestScore("Sam", 78, 90);
  printHighestScore("Oliver", 72, 65, 98);
  printHighestScore("Steve", 84, 69, 43, 97);