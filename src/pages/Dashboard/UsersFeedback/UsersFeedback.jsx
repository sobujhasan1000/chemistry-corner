import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getAllFeedbacks } from "../../../api/fetch";
import { FaRegEye } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";

const UsersFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    getAllFeedbacks().then((data) => setFeedbacks(data));
  }, []);
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

      <div className="my-20 overflow-x-auto md:max-w-7xl mx-auto ">
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
            <div className="border border-black border-t-0 md:border-t md:border-l-0 p-3 text-center font-bold ">
              Actions
            </div>
          </div>
          {feedbacks.map((feedback, index) => (
            <div
              key={feedback._id}
              className="text-black grid grid-cols-1 md:grid-cols-6"
            >
              <div className="border border-black p-3 border-t-0  text-center">
                {index + 1}
              </div>
              <div className="border border-black md:border-l-0 p-3 border-t-0 text-center md:text-left">
                {feedback?.name}
              </div>
              <div className="border border-black md:border-l-0 p-3 border-t-0 text-center md:text-left">
                {feedback?.feedbackType}
              </div>
              <div className="border border-black md:border-l-0 p-3 border-t-0 text-center md:text-left">
                {feedback?.feedbackRating} stars
              </div>
              <div className=" border border-black md:border-l-0 p-3 border-t-0 text-center md:text-left">
                {feedback?.feedbackDetails?.slice(0, 20)}...
              </div>
              <div className="border border-black md:border-l-0 p-3 text-center border-t-0 flex items-center justify-center gap-5">
                <button
                  title="View"
                  className="bg-[#ED0058] hover:bg-white p-2 text-white hover:text-black border border-[#ED0058] transition-all ease-in-out duration-300"
                >
                  <FaRegEye />
                </button>
                <button
                  title="Delete"
                  className="hover:bg-[#ED0058] bg-white p-2 hover:text-white text-black border border-[#ED0058] transition-all ease-in-out duration-300"
                >
                  <BiTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersFeedback;