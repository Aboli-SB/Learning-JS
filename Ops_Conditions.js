//Arithmetic Operators, Comparison Operators (== vs ===), Logical Operators, Assignment Operators, Bitwise Operators
//Arithmetic
let x = 5;
let y = 2;
let z = x + y;
let z1 = x - y;
let z2 = x * y;
let z3 = x / y;
let z4 = x % y;
x++;
let z5 = x;
x--;
let z6 = x;
let x1 = 5;
let z7 = x ** 2;

//Comparison operator
let a = 10, b = 20;
console.log("Equal (==):", a == b);
console.log("Strict Equal (===):", a === b);
console.log("Not Equal (!=):", a != b);
console.log("Strict Not Equal (!==):", a !== b);
console.log("Greater Than (>):", a > b);
console.log("Greater Than or Equal (>=):", a >= b);
console.log("Less Than (<):", a < b);
console.log("Less Than or Equal (<=):", a <= b);

//Logical Operator
let a1 = true, b1 = false, x1 = 5, y1 = 10;

console.log("AND:", a1 && b1); 
console.log("OR:", a1 || b1); 
console.log("NOT:", !a1); 

//Bitwise Operator
console.log("Bitwise AND:", x1 & y1); 
console.log("Bitwise OR:", x1 | y1); 
console.log("Bitwise XOR:", x1 ^ y1);
console.log("Bitwise NOT:", ~x1); 

//Assignment Operator
let num = 10;  
console.log("Initial value:", num);

num += 5;  
console.log("After num += 5:", num);  

num -= 3;  
console.log("After num -= 3:", num);  

num *= 2;  
console.log("After num *= 2:", num);  

num /= 4;  
console.log("After num /= 4:", num);  

num %= 5;  
console.log("After num %= 5:", num);  

num **= 3;  
console.log("After num **= 3:", num); 

num = 5; 
console.log("\nBitwise Operations (Starting with num = 5)");

num &= 3;  
console.log("After num &= 3:", num);  

num |= 2;  
console.log("After num |= 2:", num);  

num ^= 1;  
console.log("After num ^= 1:", num);  

num <<= 1;  
console.log("After num <<= 1:", num);  

num >>= 1;  
console.log("After num >>= 1:", num);  

num >>>= 1;  
console.log("After num >>>= 1:", num);  