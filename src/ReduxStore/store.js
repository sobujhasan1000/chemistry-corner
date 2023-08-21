import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Hooks/useSingleUser";
import { memberReducer } from "../Hooks/useSingleMember";

const store = configureStore({
  reducer: {
    user: userReducer,
    member: memberReducer,
  },
});

export default store;
