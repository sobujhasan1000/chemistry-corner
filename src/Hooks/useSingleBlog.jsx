import { createSlice } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { getSigleBlog } from "../api/fetch";

const blogSlice = createSlice({
  name: "blog",
  initialState: {},
  reducers: {
    setBlog: (state, action) => {
      return action.payload;
    },
  },
});

export const { setBlog } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;

const useSingleBlog = (id) => {
  const dispatch = useDispatch();

  const { data: singleBlog = {}, isLoading: loading } = useQuery({
    queryKey: ["singleBlog", id],
    queryFn: async () => {
      const blogData = await getSigleBlog(id);
      dispatch(setBlog(blogData));
      return blogData;
    },
  });
  return [singleBlog, loading];
};

export default useSingleBlog;
