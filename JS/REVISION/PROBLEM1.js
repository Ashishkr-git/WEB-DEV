//write a js function that returns array elements larger than a number
let numarry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 99, 100, 54, 58493, 3456];
console.log(numarry);
let a = prompt("enter the number");
console.log(a);
function greaternum(a, numarry) {
  for (let i = 0; i < numarry.length; i++) {
    if (numarry[i] > a) {
      console.log(numarry[i]);
    } else {
      console.log(
        `there are no number greater than ${a} within numarry${numarry}`
      );
      break;
    }
  }
}
greaternum(a, numarry);
