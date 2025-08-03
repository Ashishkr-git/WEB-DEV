let btn = document.querySelector("button");

btn.addEventListener("click", function (event) {
  console.log(event);
  console.log("button is clicked");
});

let input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
//   console.log(event.key);
  console.log(event.code);
  if (event.code == "ArrowUp") {
    console.log("character moves forward");
  } else if (event.code == "ArrowDown") {
    console.log("character moves backward");
  } else if (event.code == "ArrowLeft") {
    console.log("character moves left");
  } else if (event.code == "ArrowRight") {
    console.log("character moves right");
  }
});
