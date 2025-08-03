//FOR LOOP

for (let index = 1; index <= 5; index++) {
  console.log(index);
}

//print all the odd numbers and even number between 1 to 15

for (let i = 1; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even number`);
  } else {
    console.log(`${i} is odd number`);
  }
}

//print the multiplication table for 5

let number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} X ${i} = ${number * i}`);
}

//nested loops

for (let i = 0; i <= 4; i++) {
  console.log(`this is ${i} outer loop`);
  for (let j = 0; j <= 4; j++) {
    console.log(j);
  }
}

//while loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

//Favorite movie

// let Favorite = "BLACKLIST";
// let input = prompt("ENTER THE MOVIE NAME");
// while (input != Favorite && input != `quit`) {
//   input = prompt("WRONG ANSWER TRY AGAIN");
// }

//BREAK STATEMENT