import { useContext, useEffect, useState } from "react";
import { getFavoriteByEmail } from "../../../api/fetch";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    getFavoriteByEmail(user.email)
      .then((data) => {
        setFavorites(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, [user?.email]);
  return <div>From Fav {favorites.length}</div>;
};

export default Favorites;
