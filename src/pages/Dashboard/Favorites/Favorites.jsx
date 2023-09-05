import { useContext } from "react";
import { getFavoriteListByEmail } from "../../../api/fetch";
import { AuthContext } from "../../../providers/AuthProvider";
import siteLoader from "/ccLoader.gif";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import ConnectionCard from "../../../components/Dashboard/ConnectionCard/ConnectionCard";

const Favorites = () => {
  const { user } = useContext(AuthContext);

  const { data: favorites = [], isLoading: loading } = useQuery({
    queryKey: ["favoriteList", user?.email],
    queryFn: async () => {
      const data = await getFavoriteListByEmail(user?.email);
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
  return (
    <div>
      <Helmet>
        <title>My Favorite - Chemistry Corner</title>
      </Helmet>
      <h1 className="text-3xl font-bold">My Favorites Person.</h1>
      <div>
        <div className="grid gap-6 my-8 lg:grid-cols-4 sm:grid-cols-2">
          {favorites.map((user) => (
            <ConnectionCard key={user._id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
