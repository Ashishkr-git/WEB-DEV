let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");

div.addEventListener("click", function () {
  console.log("div is clicked");
});
ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("ul is clicked");
});

for (list of lists) {
  list.addEventListener("click", function () {
    event.stopPropagation();
    console.log("li clicked");
  });
}
