//parent class
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`hi my name is ${name}`);
  }
}

//child class
class students extends person {
  constructor(name, age, marks) {
    super(name, age); //parent class constructor is being called
    this.marks = marks;
  }
}

class teachers extends person {
  constructor(name, age, subject) {
    super(name, age); //parent class constructer is being called
    this.subject = subject;
  }
}
