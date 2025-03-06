export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;


// 4. Asynchronous JavaScript
// Callbacks & Callback Hell
//Callback
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);

//Callback Hell

// Promises (then, catch, finally)
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; 
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error fetching data!");
        }
    }, 2000);
});

myPromise
    .then(response => {
        console.log(response);  // Executes if resolved
    })
    .catch(error => {
        console.error(error);   // Executes if rejected
    })
    .finally(() => {
        console.log("Operation complete!"); // Runs always
    });

// Async/Await Best Practices

// Error Handling in Async Code
