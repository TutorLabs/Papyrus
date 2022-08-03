import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import verifyCode from "./verifyCode";
import auth from "./auth";
import error from "./error";
import postid from "./postid";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, auth);

export const store = configureStore({
  reducer: {
    verifyCode: verifyCode,
    auth: persistedReducer,
    error: error,
    postid: postid,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  middleware: [thunk]
});

export const persistor = persistStore(store)