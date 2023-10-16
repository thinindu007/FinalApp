import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface Task {
  id: string;
  text: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<{id: string; text: string}>) => {
      const {id, text} = action.payload;
      const taskToUpdate = state.tasks.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.text = text;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const {addTask, updateTask, deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;
