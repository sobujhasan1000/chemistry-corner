import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { saveUser } from "../../api/auth";

const SocialLogin = () => {
  const { setUser, facebookSignIn, googleSignIn, setLoading, loading } =
    useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        const userInfo = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          image: loggedUser.photoURL,
          gender: "",
          age: "",
          profession: "",
        };
        saveUser(userInfo).then((data) => {
          if (data.insertedId) {
            console.log("from google", loggedUser);
            toast.success(
              `${
                loggedUser?.displayName || "Unknown user"
              } logged in successfully`
            );
            setLoading(false);
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setLoading(false);
      });
  };
  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log("from facebook", loggedUser);
        toast.success(
          `${loggedUser?.displayName || "Unknown user"} logged in successfully`
        );
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setLoading(false);
      });
  };
  return (
    <div className="flex flex-row items-center justify-center">
      <div
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center btn btn-ghost"
      >
        {loading ? (
          <TbFidgetSpinner className="m-auto animate-spin" size={24} />
        ) : (
          <>
            <FcGoogle className="text-4xl  bg-white rounded " />
          </>
        )}
      </div>
      <div
        onClick={handleFacebookSignIn}
        className="flex justify-center items-center btn btn-ghost"
      >
        {loading ? (
          <TbFidgetSpinner className="m-auto animate-spin" size={24} />
        ) : (
          <>
            <FaFacebookSquare className="text-4xl text-blue-700 bg-white rounded " />
          </>
        )}
      </div>
    </div>
  );
};

export default SocialLogin;
