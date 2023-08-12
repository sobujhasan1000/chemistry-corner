import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";

const SocialLogin = () => {
  const { setUser, facebookSignIn, googleSignIn, setLoading, loading } =
    useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log("from google", loggedUser);
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
    <div>
      <div
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center btn btn-ghost gap-1"
      >
        {loading ? (
          <TbFidgetSpinner className="m-auto animate-spin" size={24} />
        ) : (
          <>
            <FcGoogle className="text-4xl" />
            <span>Google Login</span>
          </>
        )}
      </div>
      <div
        onClick={handleFacebookSignIn}
        className="flex justify-center items-center btn btn-ghost gap-1"
      >
        {loading ? (
          <TbFidgetSpinner className="m-auto animate-spin" size={24} />
        ) : (
          <>
            <FaFacebookSquare className="text-4xl" />
            <span>Facebook Login</span>
          </>
        )}
      </div>
    </div>
  );
};

export default SocialLogin;
