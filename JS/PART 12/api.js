let jsonresp =
  '{"fact":"Cats must have fat in their diet because they cant produce it on their own.","length":76}';

let validres = JSON.parse(jsonresp);

console.log(validres);

let students = {
  name: "Ashish kumar",
  class: 12,
  age: 24,
};

console.log(JSON.stringify(students))