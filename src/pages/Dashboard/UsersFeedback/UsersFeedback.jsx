import { Helmet } from "react-helmet-async";

const UsersFeedback = () => {
  return (
    <div>
      <Helmet>
        <title>Users Feedbacks - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Users Feedbacks</h1>
        </div>
      </div>

      <div className="my-20 overflow-x-auto border ">
        <div className="">
          <div className="text-black grid grid-cols-1 md:grid-cols-6">
            <div className="border border-black p-3 text-center">#</div>
            <div className="border border-black border-t-0 md:border-t md:border-l-0 p-3 font-bold text-center md:text-left">
              UserName
            </div>
            <div className="border border-black border-t-0 md:border-t md:border-l-0 p-3 font-bold text-center md:text-left">
              Feedback Type
            </div>
            <div className="border border-black border-t-0 md:border-t md:border-l-0 p-3 font-bold text-center md:text-left">
              Feedback Rating
            </div>
            <div className=" border border-black border-t-0 md:border-t md:border-l-0 p-3 font-bold text-center md:text-left">
              Feedback Text
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
              Positive Feedback, Suggestion, Bug Report,Complaint,Feature
              Request,General Feedback, Other
            </div>
            <div className="border border-black md:border-l-0 p-3 border-t-0 text-center md:text-left">
              5 stars
            </div>
            <div className=" border border-black md:border-l-0 p-3 border-t-0 text-center md:text-left">
              Feedback Details
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

export default UsersFeedback;
