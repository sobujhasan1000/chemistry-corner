import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
const RegisterComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
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
            className="bg-white p-1"
          />
          {errors.name && (
            <span className="text-white">Name field is required</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="photoURL" className="text-white">
            Photo URL: *
          </label>
          <input
            type="file"
            name="photoURL"
            {...register("photoURL", { required: true })}
            placeholder="Your Photo URL"
            className="bg-white p-1"
          />
          {errors.photoURL && (
            <span className="text-white">This field is required</span>
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
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder="Password"
              className=" w-full bg-white focus:outline-none"
            />
            <div className="cursor-pointer" onClick={togglePasswordVisibility}>
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
              className="w-full bg-white focus:outline-none"
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
          <FaUser className="text-white" />
          <input type="submit" value="Sign Up" className="cursor-pointer" />
        </div>
      </div>
    </form>
  );
};

export default RegisterComponent;
