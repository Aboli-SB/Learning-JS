//Asynchronous Javascript
console.log("Start");

setTimeout(() => {
  console.log("Step 2: Async Task (setTimeout)");
}, 2000);

console.log("Step 3: End");

//Promises
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved: Data Received!");
  }, 2000);
});

console.log("Waiting for Promise...");

myPromise.then((result) => {
  console.log(result);
});

//Asyn/Await
async function fetchData() {
  console.log("Fetching data...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Data received!");
}

fetchData();
