import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  open: false,
};

export const snackbarSlice = createSlice({
  name: "snackbar",
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

export const { updateText, handleClose } = snackbarSlice.actions;
export default snackbarSlice.reducer;
