btn = document.querySelector("button");
h1 = document.querySelector("h1");
h3 = document.querySelector("h3");
p = document.querySelector("p");

function changecolor() {
  console.log(this.innerText);
  this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changecolor);
