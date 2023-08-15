import { createSlice } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { fetchUserByEmail } from "../api/fetchUserByEmail";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

const useSingleUser = (email) => {
  const dispatch = useDispatch();

  const { data: singleUser = {}, isLoading: loading } = useQuery({
    queryKey: ["singleUser", email],
    queryFn: async () => {
      const userData = await fetchUserByEmail(email);
      dispatch(setUser(userData));
      return userData;
    },
  });
  return [singleUser, loading];
};

export default useSingleUser;
