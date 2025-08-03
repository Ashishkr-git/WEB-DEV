let todo = [];
let request = prompt("WHAT DO YOU WANT TO PERFORM");
while (true) {
  if (request == `quit`) {
    console.log("QUITING APP");
    break;
  }
  if (request == `list`) {
    for (list of todo) {
      console.log(list);
      break;
    }
  } else if (request == `add`) {
    console.log("adding task....");
    let task = prompt("WHAT TASK DO YOU WANT TO ADD");
    if (task == `quit`) {
      alert(`QUITING APP`);
      console.log("Quiting app....");
      break;
    }
    if (task == `delete`) {
      request = `${task}`;
    } else {
      todo.push(task);
      console.log(todo);
    }
  } else if (request == `delete`) {
    let ask = prompt("WHICH TASK DO YOU WANT TO DELETE");
    console.log("deleting task....");
    if (ask == `quit`) {
      alert(`QUITING APP`);
      console.log("quiting app....");
      break;
    } else {
      console.log(todo.splice(ask, 1));
      console.log(todo);
    }
  } else {
    request = prompt("TRY AGAIN");
  }
}