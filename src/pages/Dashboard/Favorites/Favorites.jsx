import { useContext } from "react";
import { getFavoriteByEmail } from "../../../api/fetch";
import { AuthContext } from "../../../providers/AuthProvider";
import siteLoader from "/ccLoader.gif";
import { useQuery } from "@tanstack/react-query";

const Favorites = () => {
  const { user } = useContext(AuthContext);

  const { data: favorites = [], isLoading: loading } = useQuery({
    queryKey: ["favorite", user?.email],
    queryFn: async () => {
      const data = await getFavoriteByEmail(user?.email);
      return data;
    },
  });
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img src={siteLoader} alt="Website Loader" />
      </div>
    );
  }
  return <div>From Fav {favorites.length}</div>;
};

export default Favorites;
