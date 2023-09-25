const ForgotPassword = () => {
  return (
    <div>
      <div>
        <div className="max-w-lg mx-auto my-10 p-8 rounded-xl shadow border-2 border-slate-300">
          <h1 className="text-white text-3xl font-bold pb-1">Reset password</h1>
          <p className="text-white font-light">
            Fill up the form to reset the password
          </p>
          <form action="" className="my-5">
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

              <button className="w-full py-3 font-medium text-white bg-[#e84681] rounded-lg inline-flex space-x-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>

                <span>Reset password</span>
              </button>
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
