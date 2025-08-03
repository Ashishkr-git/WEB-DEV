function getsum(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
}

function concatination(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result
}
