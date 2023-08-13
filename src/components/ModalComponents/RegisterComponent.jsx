import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../shared/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { saveUser } from "../../api/auth";
const RegisterComponent = () => {
  const { createUser, updateUserProfile, loading, setLoading, setUser, user } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    // photo upload
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData?.data?.display_url;
        createUser(data.email, data.password)
          .then(() => {
            updateUserProfile(data.name, imageUrl)
              .then(() => {
                setUser({
                  ...user,
                  displayName: data.name,
                  photoURL: imageUrl,
                });
                const userInfo = {
                  name: data.name,
                  email: data.email,
                  image: imageUrl,
                };
                saveUser(userInfo).then((data) => {
                  if (data.insertedId) {
                    setLoading(false);
                    toast.success(`account created successfully`);
                    reset();
                  }
                });
              })
              .catch((error) => {
                console.log(error.message);
                toast.error(error.message);
                setLoading(false);
              });
          })
          .catch((error) => {
            console.log(error.message);
            toast.error(error.message);
            setLoading(false);
          });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <div className="form-control">
            <label htmlFor="name" className="text-white">
              Name: *
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="bg-white p-1 outline-none"
            />
            {errors.name && (
              <span className="text-white">Name field is required</span>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="photoURL" className="text-white">
              Photo : *
            </label>
            <input
              type="file"
              name="photo"
              {...register("photo", { required: true })}
              placeholder="Your Photo URL"
              className="bg-white p-1 outline-none"
              accept="image/*"
            />
            {errors.photoURL && (
              <span className="text-white">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="gender" className="text-white">
              Gender : *
            </label>
            <select
              name="gender"
              {...register("gender", { required: true })}
              className="bg-white p-1 outline-none"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
            </select>
            {errors.gender && (
              <span className="text-white">Gender field is required</span>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="email" className="text-white">
              Email: *
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="bg-white p-1 outline-none"
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
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Password"
                className=" w-full bg-white outline-none"
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
                {errors.password.type === "minLength" &&
                  "Password must be at least 6 characters long"}
                {errors.password.type === "pattern" &&
                  "Password must contain at least one uppercase, one lowercase letter, one number and one special character"}
              </span>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="confirmPassword" className="text-white">
              Confirm Password: *
            </label>
            <div className="flex items-center w-full bg-white p-1">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Password do not match",
                })}
                placeholder="Confirm Password"
                className="w-full bg-white outline-none"
              />
              <div
                className="cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.confirmPassword && (
              <span className="text-white">
                {errors.confirmPassword.type === "required" &&
                  "Confirm Password field is required"}
                {errors.confirmPassword.type === "validate" &&
                  errors.confirmPassword.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-start">
          <div className="flex items-center gap-2 bg-[#e84681]  text-white px-3 md:px-5 py-2 cursor-pointer mt-5">
            {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              <>
                <FaUser className="text-white" />
                <input
                  type="submit"
                  value="Sign Up"
                  className="cursor-pointer"
                />
              </>
            )}
          </div>
        </div>
      </form>
      <SocialLogin />
    </div>
  );
};

export default RegisterComponent;
