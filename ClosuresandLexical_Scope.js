//Closure
function createCounter() {
    let count = 0; 
  
    return function () {
      count++; 
      console.log("Count:", count);
    };
  }
  
  const counter = createCounter();
  counter(); 
  counter(); 

//Lexical Scope
function outerFunction() {
    let outerVar = "I'm from Outer Scope!";
  
    function innerFunction() {
      console.log(outerVar);
    }
  
    innerFunction();
  }
  outerFunction();