import { useContext } from "react";
import { getLikesListById } from "../api/fetch";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useSingleUser from "./useSingleUser";

const useGetLikes = () => {
  const { user } = useContext(AuthContext);
  const [singleUser, loading] = useSingleUser(user?.email);
  const {
    data: likes = [],
    refetch: likeRefetch,
    isLoading: likesLoading,
  } = useQuery({
    queryKey: ["like"],
    enabled: !loading,
    queryFn: async () => {
      const data = await getLikesListById(singleUser._id);
      return data;
    },
  });
  return [likes, likeRefetch, likesLoading];
};

export default useGetLikes;
