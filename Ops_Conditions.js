//Arithmetic Operators, Comparison Operators (== vs ===), Logical Operators, Assignment Operators, Bitwise Operators
//Arithmetic
let x = 5;
let y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(++x);
console.log(x--);
console.log(x ** 2);

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
let a1 = true, b1 = false, x11 = 5, y1 = 10;

console.log("AND:", a1 && b1); 
console.log("OR:", a1 || b1); 
console.log("NOT:", !a1); 

//Bitwise Operator
console.log("Bitwise AND:", x11 & y1); 
console.log("Bitwise OR:", x11 | y1); 
console.log("Bitwise XOR:", x11 ^ y1);
console.log("Bitwise NOT:", ~x11); 

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

//if-else
if (num > 10) {
    console.log("Number is greater than 10");
} else if (num === 10) {
    console.log("Number is exactly 10");
} else {
    console.log("Number is less than 10");
}

//switch
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend or Invalid Day");
}

//ternary Operator
let age = 18;

let result = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(result);