let tasks = [];

function tasklist() {
  console.log(tasks);
}
function addtask() {
  task = prompt("ENTER THE TASK YOU WANT TO ADD");
  console.log(tasks.push(task));
}
function removetask() {
  task = prompt("ENTER THE TASK YOU WANT TO REMOVE");
  console.log(task.pop(task));
}
function updatetask() {
  task = prompt("ENTER THE TASK YOU WANT TO REPLACE");
  updatedtask = prompt("ENTER THE TASK YOU WANT TO REPLACE WITH");
  console.log(tasks.replace(task, updatedtask[i]));
}
function closelist() {
  alert("THANKYOU FOR USING TODOLIST");
}

while (true) {
  let ask = prompt("WHAT OPERATION DO YOU WANT TO PERFORM");

  if (ask == "addtask") {
    addtask();
  } else if (ask == "tasklist") {
    tasklist();
  } else if (ask == "updatetask") {
    updatetask();
  } else if (ask == "removetask") {
    removetask;
  } else if (ask == "closetask") {
    closelist();
    break;
  } else {
    prompt("ENTER THE VALID REQUEST");
  }
}
