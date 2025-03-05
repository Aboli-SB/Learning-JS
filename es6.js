//templete literals
const name = "Aboli";
const age = 20;
const city = "Pune";

// Using Template Literals
const message = `Hello, my name is ${name}. 
I am ${age} years old and I live in ${city}.`;

console.log(message);

//Destructuring
//Array destructure
const colors = ["Red", "Green", "Blue"];

let firstColor = colors[0];
let secondColor = colors[1];

console.log(firstColor, secondColor); 

const [c1, c2, c3] = colors;
console.log(c1, c2, c3); 

const person = {
    name1: "Aboli",
    age2: 20,
    city3: "Pune"
  };
  
  const { name1, age2, city3 } = person;
  console.log(name1, age2, city3);