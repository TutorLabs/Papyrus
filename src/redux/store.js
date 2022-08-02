import { configureStore } from "@reduxjs/toolkit";
import verifyCode from "./verifyCode";
import auth from "./auth";
import error from "./error";
import postid from "./postid";

export const store = configureStore({
  reducer: {
    verifyCode: verifyCode,
    auth: auth,
    error: error,
    postid: postid,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
