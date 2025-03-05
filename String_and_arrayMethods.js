//String method
const text = "JavaScript is amazing!";

const slicedText = text.slice(0, 10); 
console.log("Slice Example:", slicedText); 

const wordsArray = text.split(" "); 
console.log("Split Example:", wordsArray); 

const replacedText = text.replace("amazing", "awesome"); 
console.log("Replace Example:", replacedText); 

const upperCaseText = text.toUpperCase(); 
console.log("Uppercase Example:", upperCaseText); 

//Array method
let numbers = [10, 20, 30, 40, 50];

numbers.push(60);
console.log("After push:", numbers); 

let removedElement = numbers.pop();
console.log("After pop:", numbers); 
console.log("Removed Element:", removedElement); 

console.log("forEach Output:");
numbers.forEach(num => console.log(num * 2)); 

let squaredNumbers = numbers.map(num => num * num);
console.log("After map (Squared):", squaredNumbers); 

let filteredNumbers = numbers.filter(num => num > 25);
console.log("After filter (>25):", filteredNumbers); 

let totalSum = numbers.reduce((acc, num) => acc + num, 0);
console.log("After reduce (Sum):", totalSum); 