import { Helmet } from "react-helmet-async";

const UsersInpuiries = () => {
  return (
    <div>
      <Helmet>
        <title>Users Inquiries - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Users Inquiries</h1>
        </div>
      </div>

      <div className="my-20 overflow-x-auto md:max-w-7xl mx-auto ">
        <div className="">
          <div className="text-black grid grid-cols-1 md:grid-cols-6">
            <div className="border border-black p-3 text-center">#</div>
            <div className="border border-black border-t-0 md:border-t md:border-l-0 p-3 font-bold text-center md:text-left">
              UserName
            </div>
            <div className="border border-black border-t-0 md:border-t md:border-l-0 p-3 font-bold text-center md:text-left">
              Email
            </div>
            <div className="border border-black border-t-0 md:border-t md:border-l-0 p-3 font-bold text-center md:text-left">
              Subject
            </div>
            <div className=" border border-black border-t-0 md:border-t md:border-l-0 p-3 font-bold text-center md:text-left">
              Message
            </div>
            <div className="border border-black border-t-0 md:border-t md:border-l-0 p-3 text-center font-bold md:text-left">
              Actions
            </div>
          </div>
          <div className="text-black grid grid-cols-1 md:grid-cols-6">
            <div className="border border-black p-3 border-t-0  text-center">
              1
            </div>
            <div className="border border-black md:border-l-0 p-3 border-t-0 text-center md:text-left">
              Shipan Mallik
            </div>
            <div className="border border-black md:border-l-0 p-3 border-t-0 text-center md:text-left">
              mshipan657@gmail.com
            </div>
            <div className="border border-black md:border-l-0 p-3 border-t-0 text-center md:text-left">
              Question about product
            </div>
            <div className=" border border-black md:border-l-0 p-3 border-t-0 text-center md:text-left">
              I have a question about your product...
            </div>
            <div className="border border-black md:border-l-0 p-3 text-center border-t-0 flex items-center justify-center gap-5">
              <button className="bg-[#ED0058] hover:bg-white px-3 py-1 text-white hover:text-black border border-[#ED0058] transition-all ease-in-out duration-300">
                Resolve
              </button>
              <button className="hover:bg-[#ED0058] bg-white px-3 py-1 hover:text-white text-black border border-[#ED0058] transition-all ease-in-out duration-300">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersInpuiries;
