//Var
var x = 1;

if (x === 1) {
  var x = 2;
  console.log(x);
}

console.log(x);

//let
let m = 1;

if (m === 1) {
  let m = 2;

  console.log(m);
}

console.log(m);

//Const
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
}

console.log(number);