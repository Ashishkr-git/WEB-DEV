let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started..");
    started = true;
    levelup();
  }
});

function levelup() {
  level++;
  h2.innerText = `you are now on level ${level}`;
  let randomidx = Math.floor(Math.random() * 3);
  let randomcolor = btns[randomidx];
  let randbtn = document.querySelector(`.${randomcolor}`);
  flash(randbtn);
}

function flash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 1000);
}

function btnpress() {
  let btn = this;
  flash(btn);
  console.log(btn.innerText);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}
