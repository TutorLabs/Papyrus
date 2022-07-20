import { configureStore } from "@reduxjs/toolkit";
import verifyCode from "./verifyCode";
import auth from "./auth";
import error from "./error";

export const store = configureStore({
  reducer: {
    verifyCode: verifyCode,
    auth: auth,
    error: error,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
