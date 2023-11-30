import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LoginState {
  username: string;
  password: string;
}

const initialState: LoginState = {
  username: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginData: (
      state,
      action: PayloadAction<{username: string; password: string}>,
    ) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    clearLoginData: state => {
      state.username = '';
      state.password = '';
    },
  },
});

export const {setLoginData, clearLoginData} = loginSlice.actions;
export default loginSlice.reducer;
