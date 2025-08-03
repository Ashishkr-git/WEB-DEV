let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let randomcolors = randomcolor();
  h3.innerText = randomcolors;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomcolors
  console.log("color updated to " + randomcolors);
});

function randomcolor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let color = `rgb(${r},${g},${b})`;
  return color;
}
