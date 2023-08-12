import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
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
  return (
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
      </div>
      <div className="flex items-center justify-start">
        <div className="flex items-center gap-2 bg-[#e84681]  text-white px-3 md:px-5 py-2 cursor-pointer mt-5">
          <FaUser className="text-white" />
          <input type="submit" value="Log In" className="cursor-pointer" />
        </div>
      </div>
    </form>
  );
};

export default LoginComponent;
