// 1. Advanced Functions & Higher-Order Functions
// Understanding Higher-Order Functions map(), filter(), reduce() in depth

// Function Composition
const compose = (f, g) => (x) => f(g(x));

const add10 = num => num + 10;
const multiply2 = num => num * 2;

const composedFunction = compose(multiply2, add10);
console.log(composedFunction(5)); // 30

// Closures & Lexical Scope
//Lexical scope
function outer() {
    let outerVar = "I am from outer";
    function inner() {
        console.log(outerVar); 
    }
    inner();
}
outer(); 
//Closures
function outerFunction() {
    let count = 0;

    return function innerFunction() {
        count++; 
        console.log(count);
    };
}

const counter = outerFunction(); 
counter(); 
counter(); 
counter(); 


// Memoization and Caching
//memoization
function memoize(fn) {
    let cache = {}; 

    return function (num) {
        if (num in cache) { 
            console.log("Fetching from cache:", num);
            return cache[num];
        }

        console.log("Calculating result:", num);
        let result = fn(num);
        cache[num] = result;  
        return result;
    };
}

const square = memoize(num => num * num);

console.log(square(4)); 
console.log(square(4)); 
console.log(square(5)); 
console.log(square(5)); 