import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../providers/AuthProvider";
import { getFavoriteListByEmail } from "../../../api/fetch";
import { Link } from "react-router-dom";

const Favorite = () => {
  const { user } = useContext(AuthContext);
  const { data: favorites = [] } = useQuery({
    queryKey: ["favoriteList", user?.email],
    queryFn: async () => {
      const data = await getFavoriteListByEmail(user?.email);
      return data;
    },
  });

  return (
    <div>
      <div>
        <div className="grid gap-2 mx-4 my-4 grid-cols-3 justify-center items-center">
          {favorites.map((user) => (
            <div key={user._id}>
              <div>
                <div className="grid mb-2 gap-1 justify-center items-center text-center">
                  <img
                    className="w-14 h-14 rounded-full"
                    src={user.image}
                    alt=""
                  />
                  <Link to={`/view-profile/${user?._id}`} className="hover:underline hover:text-[#fc4c8c]">
                  {user.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
