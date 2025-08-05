let taskinput = document.querySelector("#taskInput");
let addtaskbutton = document.querySelector("#addTaskButton");
let tasklists = document.querySelector("#taskList");

addtaskbutton.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = taskinput.value;

  let deletebutton = document.createElement("button");
  deletebutton.innerText = "delete";
  deletebutton.classList.add("delete");
  tasklists.appendChild(item);
  item.appendChild(deletebutton);
  console.log(taskinput.value);
  taskinput.value = "";
});

tasklists.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listitem = event.target.parentElement;
    listitem.remove();
    console.log("deleted");
  }
});

// let deletebtns = document.querySelectorAll(".delete");
// for (delbtn of deletebtns) {
//   delbtn.addEventListener("click", function () {
//     let parent = this.parentElement;
//     console.log(parent);
//     parent.remove();
//   });
// }
