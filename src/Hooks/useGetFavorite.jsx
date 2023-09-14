import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { getFavoriteByEmail } from "../api/fetch";

const useGetFavorite = () => {
  const { user } = useContext(AuthContext);
  const {
    data: favorites = [],
    refetch: favRefetch,
    isLoading: favLoading,
  } = useQuery({
    queryKey: ["favorite", user?.email],
    queryFn: async () => {
      const data = await getFavoriteByEmail(user?.email);
      return data;
    },
  });
  return [favorites, favRefetch, favLoading];
};

export default useGetFavorite;
