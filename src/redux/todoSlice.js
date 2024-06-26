import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  data: []
};
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todoVal = {
        id: nanoid(),
        text: action.payload,
        completed: false
      };
      state.data.push(todoVal);
    },
    removeTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.data.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    toggleComplete: (state, action) => {
      const todo = state.data.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, removeTodo, editTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;

