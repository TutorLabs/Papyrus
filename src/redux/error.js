import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
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
    handleClose: (state) => {
      state.open = false;
    },
  },
});

export const { updateText, handleClose } = errorSlice.actions;
export default errorSlice.reducer;
