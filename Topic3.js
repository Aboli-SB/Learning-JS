// 3. JavaScript Execution & Scope
// Execution Context
function first() {
    console.log("First");
    second();
}

function second() {
    console.log("Second");
}

first();
console.log("Global");

// Call Stack & Event Loop
function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
}

first();
console.log("Global Execution");

// Garbage Collection
function createUser() {
    let user = { name: "Alice" }; // Object created in memory
    console.log(user.name);
}

createUser(); // After function execution, 'user' is unreachable → Garbage Collected
