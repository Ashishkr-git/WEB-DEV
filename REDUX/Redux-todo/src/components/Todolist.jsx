import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todolist() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();
  const clickhandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h3>Todolist App</h3>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} &nbsp;
            <button onClick={() => clickhandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
