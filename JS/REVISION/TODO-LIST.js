let button = document.querySelector(".add-task");
let tasklist = document.querySelector(".task-list");
let taskinput = document.querySelector(".task-input");
let delbtn = document.querySelector(".delete");

button.addEventListener("click", function () {
  let input = taskinput.value;
  let task = document.createElement("li");
  task.innerHTML = `${input} `;
  tasklist.appendChild(task);
  let btn = document.createElement("button");
  btn.classList.add("delete");
  btn.innerHTML = "Delete";
  task.appendChild(btn);
  taskinput.value = "";
});

tasklist.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
