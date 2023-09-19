import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getAllFeedbacks } from "../api/fetch";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(1);
  useEffect(() => {
    getAllFeedbacks().then((data) => setFeedbacks(data));
  }, []);

  const testimonialsPerPage = 4;
  const indexOfLastTestimonial = currentTestimonial * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = feedbacks.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
  const totalPages = Math.ceil(feedbacks.length / testimonialsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentTestimonial(i)}
          className={`px-3 py-1 rounded-md ${
            currentTestimonial === i
              ? "bg-pink-500 text-white"
              : "bg-pink-300 text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="bg-gray-200">
      <Helmet>
        <title>User Testimonials - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold"> User Testimonials</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  container mx-auto my-20">
        {currentTestimonials.map((feedback) => (
          <div
            key={feedback._id}
            className="px-16 py-12 shadow-lg hover:shadow-xl shadow-gray-300 rounded-lg bg-pink-100 mx-4"
          >
            <div className="mb-5 flex items-center gap-5">
              <img
                src={feedback.image}
                alt="Feedback User Image"
                className="w-14 h-14 rounded-full border border-pink-400 object-center object-cover"
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
      <div className="flex justify-center pb-8 items-center space-x-2">
          <button
            onClick={() => setCurrentTestimonial(currentTestimonial - 1)}
            disabled={currentTestimonial === 1}
            className="px-3 py-1 rounded-md bg-pink-200 hover:bg-pink-400"
          >
            Previous
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => setCurrentTestimonial(currentTestimonial + 1)}
            disabled={currentTestimonial === totalPages}
            className="px-3 py-1 rounded-md bg-pink-200 hover:bg-pink-400"
          >
            Next
          </button>
        </div>
    </div>
  );
};

export default Testimonials;
