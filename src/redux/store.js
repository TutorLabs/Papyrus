import { configureStore } from "@reduxjs/toolkit";
import verifyCode from "./verifyCode";
import auth from "./auth";

export const store = configureStore({
  reducer: {
    verifyCode: verifyCode,
    auth: auth
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
