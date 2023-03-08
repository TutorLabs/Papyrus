import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  title: "Something went wrong", // optional
  open: false,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    updateText: (state, action) => {
      state.text = action.payload;
      state.open = true;
    },
    updateTitle: (state, action) => {
      state.title = action.payload;
      state.open = true;
    },
    handleClose: (state) => {
      state.open = false;
    },
  },
});

export const { updateText, handleClose, updateTitle } = errorSlice.actions;
export default errorSlice.reducer;
