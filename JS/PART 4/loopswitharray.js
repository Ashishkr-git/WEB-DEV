let fruits = [
  `mango`,
  `apple`,
  `watermelon`,
  `orange`,
  `banana`,
  `litchi`,
  `kiwi`,
  `pomogranate`,
];

for (let index = 0; index < fruits.length; index++) {
  if (index == 0) {
    console.log(`${fruits[index]} is at nuteral index ${index}`);
  }
  if (index % 2 == 0) {
    console.log(`${fruits[index]} is at even index number ${index}`);
  } else {
    console.log(`${fruits[index]} is at odd index number ${index}`);
  }
}

let arr = [
  [`superman`, `ironman`, `batman`, `thor`],
  [`is dc hero`, `is marvel hero`, `is dc hero`, `is marvel hero`],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(`index = ${[j]} ${arr[i][j]}`);
  }
}
