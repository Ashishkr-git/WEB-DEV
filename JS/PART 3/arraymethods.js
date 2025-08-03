//push
let cars = ["cars", "bmw", "mercides"];
cars.push("macleren");
console.log(cars);

//pop
cars.pop();
console.log(cars);

//shift

cars.shift();
console.log(cars);

//unshift
cars.unshift("toyota");
console.log(cars);

let followers = ["a", "b", "c"];
let blocked = followers.shift();
console.log(blocked);
console.log(followers);

//practice questions
let months = ["january", "july", "march", "august"];

months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months);

//index of

let primary = ["red", "yellow", "green"];
console.log(primary.indexOf("red"));

// includes of

console.log(primary.includes("red"));

// concatinate methods

console.log(months.concat(primary));

//reverse methods

console.log(primary.reverse());

//slice methods

let colors = ["red", "green", "blue", "orange", "pink", "white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2, 3));
console.log(colors.slice(-2));

//splice methods splice(start,delete,item,item)

console.log(colors.splice());
console.log(colors.splice(4));
console.log(colors.splice(0, 1));
console.log(colors.splice(0, 0, "toyota", "suv", "farari"));

console.log(colors);

//sort method
//used only when character are given in string

//practice question
months.splice(0, 2, "july", "june");
console.log(months);

//practice question 2

let language = [
  "c",
  "c++",
  "html",
  "javascript",
  "python",
  "java",
  "c#",
  "sql",
];
console.log(language.reverse().indexOf("sql"));
