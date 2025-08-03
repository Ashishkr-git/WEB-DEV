let sum = 54; //global scope

function calcSum(a, b) {
  let sum = a + b; //function scope
  console.log(sum);
}
calcSum(1, 2);
console.log(sum);

let name = function(a,b) {
      return a+b
}
console.log(name(1,2))