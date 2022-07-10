import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: {},
  role: '',
  signedIn: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    updateRole: (state, action) => {
      state.role = action.payload
    },
    updateSignedIn: (state, action) => {
        state.signedIn = action.payload
    }
  },
});

export const { updateToken, updateRole, updateSignedIn } = authSlice.actions;
export default authSlice.reducer;