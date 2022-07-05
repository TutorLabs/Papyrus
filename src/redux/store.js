import { configureStore } from "@reduxjs/toolkit";
import verifyCode from "./verifyCode";

export const store = configureStore({
  reducer: {
    verifyCode: verifyCode,
  },
});
