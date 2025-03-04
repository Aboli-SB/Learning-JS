//String, Number, Boolean, Null, Undefined, Symbol, BigInt
//String
let firstName = 'Aboli';
console.log(firstName);

//number - Int, Float, Double and bignums
let a = 10;
let b = 5;
let number = -8.5;
let sum = a + b;
console.log(`Sum: ${sum}`);
console.log(number);

//Boolean
let stmt=true;
if(stmt===true){
    console.log("Success");
}

//Null
console.log(typeof null);
function greet(name) {
    if (name === null) {
        return "Hello, guest!";
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet(null)); 
console.log(greet("Aboli"));

//Undefined
let x; 
console.log(`x's value is ${x}`);

//Symbol
const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); 

//BigInt
let bigNum = BigInt("123422222222222222222222222222222222222");
console.log(bigNum);

//Non-Primitive Types: Object, Array, Function
//Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
 
  console.log(person.name); 
  console.log(person.age);  

//Array
let numbers = [10, 30, 40, 60, 80]
console.log(numbers);  
console.log(numbers[2]);  

//Function
function greet() {
    console.log("Hello World!");
}
greet();

//Type Casting 
//Implicit

let result;
result = "3" + 2; 
console.log(result, "-", typeof(result));

//Explicit
let num_float = 10.5;
let num_int = parseInt(num_float);