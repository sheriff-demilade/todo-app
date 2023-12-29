import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./TasksSlice";

export const store = configureStore({
  reducer: { taskList: tasksReducer },
});
