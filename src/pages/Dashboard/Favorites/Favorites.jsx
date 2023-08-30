import { useContext } from "react";
import { getFavoriteByEmail } from "../../../api/fetch";
import { AuthContext } from "../../../providers/AuthProvider";

import { useQuery } from "@tanstack/react-query";

const Favorites = () => {
  const { user } = useContext(AuthContext);

  const { data: favorites = [], isLoading: loading } = useQuery({
    queryKey: ["favorite", user.email],
    queryFn: async () => {
      const data = await getFavoriteByEmail(user.email);
      return data;
    },
  });
  return <div>From Fav {favorites.length}</div>;
};

export default Favorites;
