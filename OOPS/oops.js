let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr1.sayhello = () => {
  console.log("hello welcome");
};

//FACTORY FUNCTION
function PersonMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`hi my name is ${name} and my age is ${age}`);
    },
  };
  return person;
}

//CONSTRUCTOR -- doesnt return anything & starts with capital letter

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.talk = function () {
  console.log(`hi my name is ${name} and my age is ${age}`);
};

let p1 = new Person("ashish", 25);
let p2 = new Person("hemant", 25);

//classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk(){
    console.log(`hi my name is ${name} and my age is ${age}`);
  }
}

