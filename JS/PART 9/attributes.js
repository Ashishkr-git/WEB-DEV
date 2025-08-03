// getter & setter
let img = document.querySelector("img");

console.log(img.getAttribute("id"));
console.log(img.setAttribute("id", "superman.img"));

let links = document.querySelectorAll(".box a");
for (i = 0; i < links.length; i++) {
  links[i].style.color = "purple";
}

let heading = document.querySelector("h1");
 heading.classList.add('green')