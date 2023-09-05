import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getAllFeedbacks } from "../api/fetch";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    getAllFeedbacks().then((data) => setFeedbacks(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>User Testimonials - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold"> User Testimonials</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-1/2 container mx-auto my-20">
        {feedbacks.map((feedback) => (
          <div
            key={feedback._id}
            className="p-16 shadow-xl shadow-gray-300 w-full"
          >
            <div className="mb-5 flex items-center gap-5">
              <img
                src={feedback.image}
                alt="Feedback User Image"
                className="w-14 rounded-full"
              />
              <h1 className="text-black text-xl font-signature capitalize">
                {feedback.name}
              </h1>
            </div>
            <p className="text-sm text-black mb-5">
              {feedback.feedbackDetails.slice(0, 150)}...
            </p>
            <div className="flex justify-end">
              <Rating
                style={{ maxWidth: 100 }}
                value={feedback.feedbackRating}
                readOnly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
