//square and sum the array elements using the arrow function and then find the average of the array

let elements = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
];
console.log(elements);

let square = elements.map((element) => element * element);
console.log(square);

let sum = square.reduce((sum, element) => sum + element);
console.log(sum);

let average = (sum/elements.length)
console.log(average)
