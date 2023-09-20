import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);

  const handleReset = (e) => {
    e.preventDefault;
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => toast.success(`Reset password email sent to ${email}`))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        <div className="max-w-lg mx-auto my-10 p-8 rounded-xl shadow border-2 border-slate-300">
          <h1 className="text-white text-3xl font-bold pb-1">Reset password</h1>
          <p className="text-white font-light">
            Fill up the form to reset the password
          </p>
          <form onSubmit={handleReset} className="my-5">
            <div className="flex flex-col space-y-3">
              <label htmlFor="email">
                <p className="font-medium text-white pb-2">Email address</p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter email address"
                />
              </label>
              <input
                className="w-full py-3 font-medium text-white bg-[#e84681] rounded-lg inline-flex space-x-2 items-center justify-center"
                type="submit"
                value="Reset Password"
              />
              <p className="text-center text-white">
                Not registered yet?{" "}
                <a
                  href="#"
                  className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                >
                  <span className="text-blue-300 underline">Register now</span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
