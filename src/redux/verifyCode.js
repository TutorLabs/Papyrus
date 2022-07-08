import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: {},
  initial_info: {}
};

export const verifyCodeSlice = createSlice({
  name: "verifyCode",
  initialState,
  reducers: {
    updateVerifyCode: (state, action) => {
      state.code = action.payload;
    },
    updateInitialInfo: (state, action) => {
      state.initial_info = action.payload
    }
  },
});

export const { updateVerifyCode, updateInitialInfo } = verifyCodeSlice.actions;
export default verifyCodeSlice.reducer;
