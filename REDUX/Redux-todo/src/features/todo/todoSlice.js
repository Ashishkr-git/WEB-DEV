//reducer
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { clear } from "console";
import { styleText } from "util";
const initialState = {
  todos: [
    {
      id: nanoid(),
      task: "Learn Redux Toolkit",
      isdone: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isdone: false,
      };
      state.todos.push(newTodo); //direct mutation
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markasdoneTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isdone = true;
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, markasdoneTodo } = todoSlice.actions;
