import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartRedux.js";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});
