import siteLoader from "/ccLoader.gif";
import { Helmet } from "react-helmet-async";
import ConnectionCard from "../../../components/Dashboard/ConnectionCard/ConnectionCard";
import useGetLikes from "../../../Hooks/useGetLikes";

const Likes = () => {
  const [likes, , likesLoading] = useGetLikes();
  if (likesLoading) {
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
