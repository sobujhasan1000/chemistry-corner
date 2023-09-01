import { useContext } from "react";
import { getFavoriteListByEmail } from "../../../api/fetch";
import { AuthContext } from "../../../providers/AuthProvider";
import siteLoader from "/ccLoader.gif";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";

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
      <h1 className="text-3xl font-bold">My Favorites Person.</h1>
      <div>
        <div className="grid gap-6 my-8 lg:grid-cols-4 sm:grid-cols-2">
          {favorites.map((favorite, index) => (
            <div
              key={index}
              className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
            >
              <img
                src={
                  favorite.image ||
                  "https://i.pinimg.com/originals/bc/37/8c/bc378c7c42cc2fe83b3c666b73d684e9.jpg"
                }
                alt="favorite image"
                className="object-cover w-full h-56 md:h-64 xl:h-80"
              />

              <div className="bg-pink-100 px-8 py-6 bg-opacity-60 opacity-0 hover:opacity-100 text-gray-800 absolute inset-0 transition-opacity font-bold duration-200 flex flex-col gap-16">
                <div className="flex flex-col gap-1">
                  <p className="text-3xl text-center">{favorite.name}</p>

                  <p className="text-[#ED0058] italic text-center">
                    {favorite.email}
                  </p>
                </div>

                <p className="uppercase inline-flex items-center gap-1 justify-center mt-7">
                  <MdLocationPin />
                  {favorite.country}
                </p>

                <Link
                  to={`/view-profile/${favorite._id}`}
                  className="btn bg-[#FD6585] hover:bg-[#ED0058] w-full text-white border-0 mt-auto "
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
