import siteLoader from "/ccLoader.gif";
import { useContext } from "react";
import { getLikesListByEmail } from "../../../api/fetch";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import ConnectionCard from "../../../components/Dashboard/ConnectionCard/ConnectionCard";

const Likes = () => {
  const { user } = useContext(AuthContext);

  const { data: likes = [], isLoading: loading } = useQuery({
    queryKey: ["likesList", user?.email],
    queryFn: async () => {
      const data = await getLikesListByEmail(user?.email);
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
        <title>Likes - Chemistry Corner</title>
      </Helmet>
      <h1 className="text-3xl font-bold">People who liked me</h1>
      <div>
        <div className="grid gap-6 my-8 lg:grid-cols-4 sm:grid-cols-2">
          {likes.map((user) => (
            <ConnectionCard key={user._id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Likes;
