import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [task, setTask] = useState([{ task: [], id: uuidv4(), done: false }]);
  let [newTask, setNewTask] = useState("");

  let addtask = (prevTask) => {
    setTask([...task, { task: newTask, id: uuidv4(), done: false }]);
    setNewTask("");
  };

  let UpdateTodovalue = (event) => {
    setNewTask(event.target.value);
  };

  let deleteTask = (id) => {
    console.log(id);
    setTask(task.filter((todo) => todo.id !== id));
  };

  let upperCaseAll = () => {
    setTask((prevTask) =>
      prevTask.map((task) => {
        return {
          ...task,
          task: task.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseTask = (id) => {
    setTask((prevTask) =>
      prevTask.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            task: task.task.toUpperCase(),
          };
        }
        return task;
      })
    );
  };

  let markAsDoneTask = (id) => {
    setTask((prevTask) =>
      prevTask.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: true,
          };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        value={newTask}
        onChange={UpdateTodovalue}
      />{" "}
      &nbsp;
      <button onClick={addtask}>Add Task</button>
      <h4>My Tasks</h4>
      <ul>
        {task.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={todo.done ? { textDecorationLine: "line-through" } : {}}
              >
                {todo.task}
              </span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => upperCaseTask(todo.id)}>UpperCase</button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => markAsDoneTask(todo.id)}>
                MarkAsDone
              </button>
            </li>
          );
        })}
      </ul>
      <br />
      <button onClick={upperCaseAll}>Uppercase All</button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={upperCaseAll}>Mark All As Done</button>
    </div>
  );
}
