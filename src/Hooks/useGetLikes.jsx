import { useContext } from "react";
import { getLikesByEmail } from "../api/fetch";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useGetLikes = () => {
  const { user } = useContext(AuthContext);
  const {
    data: likes = [],
    refetch: likeRefetch,
    isLoading: likesLoading,
  } = useQuery({
    queryKey: ["like", user?.email],
    queryFn: async () => {
      const data = await getLikesByEmail(user?.email);
      return data;
    },
  });
  return [likes, likeRefetch, likesLoading];
};

export default useGetLikes;
