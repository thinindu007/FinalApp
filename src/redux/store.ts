//store.ts
import {configureStore} from '@reduxjs/toolkit';
import loginReducer from '../reducers/LoginReducer';
// import userDetailsReducer from '../reducers/userDetailsReducer';
import tasksReducer from '../reducers/TaskReducer';

const store = configureStore({
  reducer: {
    login: loginReducer,
    // userDetails: userDetailsReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
