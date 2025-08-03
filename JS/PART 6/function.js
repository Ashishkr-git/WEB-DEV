function rollthedice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

function average(num1, num2, num3) {
  result = (num1 + num2 + num3) / 3;
  console.log(result);
}

function table(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
  }
}
table(6)
