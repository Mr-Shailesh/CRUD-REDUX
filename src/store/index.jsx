import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "./user-list.slice";

const store = configureStore({
  reducer: {
    users: userListSlice.reducer,
  },
});

export default store;
