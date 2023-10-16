import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ProfileState {
  profilePicture: string | null;
}

const initialState: ProfileState = {
  profilePicture: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfilePicture: (state, action: PayloadAction<string | null>) => {
      state.profilePicture = action.payload;
    },
    clearProfilePicture: state => {
      state.profilePicture = null;
    },
  },
});

export const {setProfilePicture, clearProfilePicture} = profileSlice.actions;
export default profileSlice.reducer;
