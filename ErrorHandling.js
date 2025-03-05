//Error Handling & Debugging
//Try Catch Stmt
try {
    let num = 10;
    let result = num / 0; 
    console.log("Result:", result);
  
    let value = unknownVar + 5; 
  } catch (error) {
    console.log("Error:", error.message);
  }
  finally{
    console.log("Finally Block is executed...");
  }
