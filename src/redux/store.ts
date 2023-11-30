import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginReducer from '../redux/reducers/LoginReducer';
import userDetailsReducer from '../redux/reducers/UserReducer';
import tasksReducer from '../redux/reducers/TaskReducer';
import profileReducer from '../redux/reducers/ProfileReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  userDetails: userDetailsReducer,
  tasks: tasksReducer,
  profile: profileReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, persistor};
