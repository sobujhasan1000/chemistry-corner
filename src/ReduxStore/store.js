import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Hooks/useSingleUser";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
