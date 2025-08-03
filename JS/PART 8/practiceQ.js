//check if all numbers in our array are multiple of 10 or not
let number = [14, 34, 56, 76, 84, 96, 82, 66];
let answer1 = number.every((elements) => elements % 10 == 0);
console.log(answer1);
let answer2 = number.reduce((minimum, element) => {
  if (minimum < element) {
    return minimum;
  } else {
    return element;
  }
});
console.log(answer2)
