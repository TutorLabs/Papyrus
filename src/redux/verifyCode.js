import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: {},
};

export const verifyCodeSlice = createSlice({
  name: "verifyCode",
  initialState,
  reducers: {
    updateVerifyCode: (state, action) => {
      state.code = action.payload;
    },
  },
});

export const { updateVerifyCode } = verifyCodeSlice.actions;
export default verifyCodeSlice.reducer;
