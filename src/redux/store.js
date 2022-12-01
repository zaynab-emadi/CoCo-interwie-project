import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSilce";
import detailSlice from "./detailSlice";

export default configureStore({
  reducer: {
    users: usersSlice,
    detail: detailSlice,
  },
});
