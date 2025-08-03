//FOR EACH METHOD

let arr = [1, 2, 3, 4, 5];

//WITH ARROW FUNCTION

arr.forEach((el) => {
  console.log(el);
});

// WITH NORMAL FUNCTION

arr.forEach(function numbers(n) {
  console.log(n);
});

// store object

let students = [
  { name: "ashish", marks: 95 },
  { name: "hemant", marks: 100 },
  { name: "lala", marks: 150 },
  { name: "reshit", marks: 500 },
];

students.forEach((data) => {
  console.log(data.marks);
});
