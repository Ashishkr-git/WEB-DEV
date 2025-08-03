let max = prompt("ENTER THE MAXIMUM NUMBER");
console.log(max);
let randomnum = Math.floor(Math.random() * max) + 1;
console.log(randomnum);
let guess = prompt("GUESS THE NUMBER");
console.log(guess);

while (true) {
  if (guess == randomnum) {
    console.log(`${guess} is equal to ${randomnum}`);
    alert("RIGHT GUESS !!!!");
    break;
  } else {
    console.log(`${guess} is not equal to ${randomnum}`);
    console.log(`diffrence between correct answer is ${randomnum-guess}`);
    guess = prompt("TRY AGAIN");
  }
  if (guess == "quit") {
    console.log("quiting game......");
    alert("quiting game......");
    break;
  }
}
