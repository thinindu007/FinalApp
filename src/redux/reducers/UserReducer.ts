import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserDetailsState {
  username: string;
  password: string;
}

const initialState: UserDetailsState = {
  username: '',
  password: '',
};

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<UserDetailsState>) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const {setUserDetails} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
