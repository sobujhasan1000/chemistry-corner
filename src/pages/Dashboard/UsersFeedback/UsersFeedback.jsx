import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getAllFeedbacks } from "../../../api/fetch";
// import { FaRegEye } from "react-icons/fa";
// import { BiTrash } from "react-icons/bi";
import { Rating } from "@smastrom/react-rating";

const UsersFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbacksPerPage, setFeedbacksPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllFeedbacks().then((data) => setFeedbacks(data));
  }, []);

  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstFeedback,indexOfLastFeedback);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleRowsPerPageChange = (e) => {
    setFeedbacksPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(feedbacks.length / feedbacksPerPage);

  return (
    <div>
      <Helmet>
        <title>Users Feedbacks - Chemistry Corner</title>
      </Helmet>
      {/* <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center overflow-x-auto">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Users Feedbacks</h1>
        </div>
      </div> */}
      <div className="overflow-x-auto mt-12 px-8 text-black bg-pink-200 p-6">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <label className="mr-2">Rows per page:</label>
            <select
              className="border border-gray-300 text-[#ED0058] rounded-md px-2 py-1"
              value={feedbacksPerPage}
              onChange={handleRowsPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search by Name"
            value={searchTerm}
            onChange={handleSearch}
            className="border border-[#ED0058] rounded-md px-2 py-1 placeholder:text-[#ED0058] focus:outline-pink-800"
          />
        </div>
        <table className="table table-zebra">
          <thead className="text-xl">
            <tr>
              <th>Si No</th>
              <th>Photo & Name</th>
              <th>Feedback Type</th>
              <th>Feedback Rating</th>
              <th>Feedback Text</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {currentFeedbacks
              .filter((feedback) =>
                feedback.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((feedback, index) => (
                <tr key={feedback._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={feedback.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{feedback.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{feedback?.feedbackType}</td>
                  <td>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={feedback?.feedbackRating}
                      readOnly
                    />
                  </td>
                  <td>{feedback?.feedbackDetails?.slice(0, 20)}...</td>
                  {/* <td>
                    <button
                      title="View"
                      className="rounded-md bg-[#ED0058] hover:bg-white p-2 text-white hover:text-black border border-[#ED0058] transition-all ease-in-out duration-300"
                    >
                      <FaRegEye />
                    </button>
                    <button
                      title="Delete"
                      className="ml-2 rounded-md hover:bg-[#ED0058] bg-white p-2 hover:text-white text-black border border-[#ED0058] transition-all ease-in-out duration-300"
                    >
                      <BiTrash />
                    </button>
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
        <div className="pagination mt-4 flex flex-row justify-end">
          <button className={`mr-2 ${
            currentPage === 1 ? "cursor-not-allowed bg-gray-300" : ""
          } py-2 px-4 rounded-md border border-[#ED0058] bg-[#ED0058] hover:bg-white text-white hover:text-black transition-all ease-in-out duration-300`}
            onClick={() => {if(currentPage>1){paginate(currentPage - 1)}} }
            disabled={currentPage === 1}
           
          >
            Previous
          </button>
          <button className={`${
            currentPage * feedbacksPerPage>=feedbacks.length
              ? "cursor-not-allowed bg-gray-300"
              : ""
          } py-2 px-4 rounded-md border border-[#ED0058] bg-[#ED0058] hover:bg-white text-white hover:text-black transition-all ease-in-out duration-300`}
            onClick={() => {if(currentPage * feedbacksPerPage < feedbacks.length){paginate(currentPage + 1)}} }
            disabled={currentPage * feedbacksPerPage>= feedbacks.length}
            
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersFeedback;
