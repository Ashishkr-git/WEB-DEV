let dice = Math.floor(Math.random() * 6) + 1;

switch (dice) {
  case 1:
    console.log("move 1 step");
    break;
  case 2:
    console.log("move 2 steps");
    break;
  case 3:
    console.log("move 3 steps");
    break;
  case 4:
    console.log("move 4 steps");
    break;
  case 5:
    console.log("move 5 steps");
    break;
  case 6:
    console.log("move 6 steps");
    break;
  default:
    console.log("invalid input");
    break;
}

const car = {
  name: [],
  model: [],
  color: [],
};

console.log(car.name = ["bmw"]);
console.log(car.name.push("audi","mercedes"))
console.log(car.name)
