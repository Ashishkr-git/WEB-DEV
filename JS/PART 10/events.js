//onclick event
let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function () {
  console.log("button is clicked");
};

//onmouse enter
let btns1 = document.querySelectorAll("button");

for (btn of btns) {
  btn.onmouseenter = function () {
    console.log("we enter the mouse area");
  };
}

//eventlistner
let btns2 = document.querySelectorAll("button");

for (btn of btns) {
  btn.addEventListener("click", sayhello);
  btn.addEventListener("click", saygood);
}

function sayhello() {
  console.log("hello");
}

function saygood() {
  console.log("say good work");
}
