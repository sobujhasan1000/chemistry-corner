import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../shared/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

const LoginComponent = ({ close }) => {
  const { loading, setLoading, signIn, resetPassword } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        reset();
        toast.success(
          `${loggedUser?.displayName || "Unknown user"} logged in successfully`
          
          );
        setLoading(false);
        window.my_modal_3.close();
        navigate(from, {replace: true})
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setLoading(false);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <div className="form-control">
            <label htmlFor="email" className="text-white">
              Email: *
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="bg-white p-1"
            />
            {errors.email && (
              <span className="text-white">Email field is required</span>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="password" className="text-white">
              Password: *
            </label>
            <div className="flex items-center w-full bg-white p-1">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                placeholder="Password"
                className=" w-full bg-white focus:outline-none"
              />
              <div
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.password && (
              <span className="text-white">
                {errors.password.type === "required" &&
                  "Password field is required"}
              </span>
            )}
          </div>
          <div>
            <p className="text-white">
              Forgot Password? Please{" "}
              <button 
              onClick={() => window.my_modal_4.showModal()}
              className="text-blue-300 underline">
                Reset.
              </button>{" "}
            </p>
          </div>
          
        </div>
        <div className="flex items-center justify-start">
          <div className="flex items-center gap-2 bg-[#e84681] text-white px-3 md:px-5 py-2 cursor-pointer mt-5">
            {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              <>
                <FaUser className="text-white" />
                <input
                  type="submit"
                  value="Log In"
                  className="cursor-pointer"
                />
              </>
            )}
          </div>
        </div>
      </form>
      <SocialLogin />

      <dialog id="my_modal_4" className="modal">
          <div className="modal-box md:w-1/2 bg-[#ED0058]">
            <button
              onClick={() => window.my_modal_4.close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h1 className="text-white text-2xl font-bold mb-5">
            Forgot Your Password?
            </h1>
            <ForgotPassword></ForgotPassword>
          </div>
        </dialog>
    </div>
  );
};

export default LoginComponent;
