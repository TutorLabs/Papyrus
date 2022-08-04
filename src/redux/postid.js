import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postid: ''
};

export const verifyCodeSlice = createSlice({
  name: "postid",
  initialState,
  reducers: {
    updatePostId: (state, action) => {
      state.postid = action.payload;
    },
  },
});

export const { updatePostId } = verifyCodeSlice.actions;
export default verifyCodeSlice.reducer;