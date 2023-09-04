import siteLoader from "/ccLoader.gif";
import { useContext } from "react";
import { getLikesListByEmail } from "../../../api/fetch";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

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
  return <div>likes: {likes.length}</div>;
};

export default Likes;
