import { createSlice } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { fetchMemberById } from "../api/fetch";

const memberSlice = createSlice({
  name: "member",
  initialState: {},
  reducers: {
    setMember: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMember } = memberSlice.actions;
export const memberReducer = memberSlice.reducer;

const useSingleMember = (id) => {
  const dispatch = useDispatch();

  const { data: singleMember = {}, isLoading: loading } = useQuery({
    queryKey: ["singleMember", id],
    queryFn: async () => {
      const memberData = await fetchMemberById(id);
      dispatch(setMember(memberData));
      return memberData;
    },
  });
  return [singleMember, loading];
};

export default useSingleMember;
