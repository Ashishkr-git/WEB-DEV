// let color = prompt("ENTER YOUR COLOR");
// console.log(color);
// if (color == "red") {
//   alert("STOP");
//   console.log("STOP");
// }
// if (color == "yellow") {
//   alert("READY TO GO");
//   console.log("READY TO GO");
// }
// if (color == "green") {
//   alert("GO");
//   console.log("GO");
// }

// let size = prompt("ENTER THE SIZE OF BUCKET");
// console.log(size);

// if (size === "XL") {
//   alert("PRICE IS 250");
//   console.log("PRICE IS 250");
// } else if (size === "L") {
//   alert("PRICE IS 200");
//   console.log("PRICE IS 200");
// } else if (size === "M") {
//   alert("PRICE IS 100");
//   console.log("PRICE IS 100");
// } else if (size === "S") {
//   alert("PRICE IS 50");
//   console.log("PRICE IS 50");
// }

// let input = "ash";
// console.log(input);

// if (input.startsWith("a") && input.length > 3) {
//   console.log("GOOD STRING");
// } else {
//   console.log("BAD STRING");
// }

let day = prompt("enter day in number");

switch (day) {
  case "1":
    console.log("SUNDAY");
    alert("SUNDAY");
    break;
  case "2":
    console.log("MONDAY");
    alert("MONDAY");
    break;
  case "3":
    console.log("TUESDAY");
    alert("TUESDAY");
    break;
  case "4":
    console.log("WEDNESDAY");
    alert("SUNDAY");
    break;
  case "5":
    console.log("THURSDAY");
    alert("THURSDAY");
    break;
  case "6":
    console.log("FRIDAY");
    alert("FRIDAY");
    break;
  case "7":
    console.log("SATURDAY");
    alert("SATURDAY");
    break;

  default:
    console.log("ENTER VALUE WITHIN RANGE OF 1-7");
    alert("ENTER VALUE WITHIN RANGE OF 1-7");
    break;
}
