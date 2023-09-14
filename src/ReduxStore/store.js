import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Hooks/useSingleUser";
import { memberReducer } from "../Hooks/useSingleMember";
import { blogReducer } from "../Hooks/useSingleBlog";

const store = configureStore({
  reducer: {
    user: userReducer,
    member: memberReducer,
    blog: blogReducer,
  },
});

export default store;
