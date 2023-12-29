import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks = [...state.tasks, payload];
    },

    editTask: (state, { payload }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === payload.id) {
          return payload;
        }
        return task;
      });
    },
    setIsDone: (state, { payload }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === payload.id) {
          return payload;
        }
        return task;
      });
    },
  },
});

export const { addTask, editTask, setIsDone } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
