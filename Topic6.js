// 6. Advanced Array & Object Methods
// Object.keys(), Object.values(), Object.entries()
const user = {
    name: "Alice",
    age: 25,
    city: "New York"
};

console.log(Object.keys(user));  

console.log(Object.values(user));  

console.log(Object.entries(user));  

// Array Manipulation (find(), some(), every(), flatMap())
const users = [
    { id: 1, name: "Alice", age: 25, hobbies: ["Reading", "Cycling"] },
    { id: 2, name: "Bob", age: 17, hobbies: ["Gaming", "Cooking"] },
    { id: 3, name: "Charlie", age: 30, hobbies: ["Hiking", "Photography"] }
];

const adultUser = users.find(user => user.age >= 25);
console.log(adultUser);  

const hasMinor = users.some(user => user.age < 18);
console.log(hasMinor);  

const allAdults = users.every(user => user.age >= 18);
console.log(allAdults);  

const allHobbies = users.flatMap(user => user.hobbies);
console.log(allHobbies);  