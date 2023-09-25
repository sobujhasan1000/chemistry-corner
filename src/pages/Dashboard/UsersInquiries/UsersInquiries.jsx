import { Helmet } from "react-helmet-async";
import { getContractUs } from "../../../api/fetch";
import { useEffect, useState } from "react";

const UsersInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbacksPerPage, setFeedbacksPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getContractUs().then((data) => setInquiries(data));
  }, []);

  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = inquiries.slice(indexOfFirstFeedback,indexOfLastFeedback );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleRowsPerPageChange = (e) => {
    setFeedbacksPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(inquiries.length / feedbacksPerPage);
 
  return (
    <div>
      <Helmet>
        <title>Users Inquiries - Chemistry Corner</title>
      </Helmet>
      <div className="overflow-x-auto mt-12 px-8 text-black bg-pink-200 p-6 rounded-md">

      <div className="mb-4 flex justify-between items-center">
          <select
            className="ml-4 p-2 border border-gray-300 rounded-md"
            value={feedbacksPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value={5}>5 rows</option>
            <option value={10}>10 rows</option>
            <option value={15}>15 rows</option>
            <option value={20}>20 rows</option>
          </select>
          <input
            type="text"
            placeholder="Search by Name"
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-[#ED0058] text-left text-base text-white font-medium capitalize tracking-wider leading-4 rounded-lg">
            <tr>
              <th className="style: rounded-tl-lg">Si No </th>
              <th>Name</th>
              <th>email</th>
              <th>Phone No</th>
              <th className="style: rounded-tr-lg">message</th>
            </tr>
          </thead>

          <tbody>
            {currentFeedbacks
              .filter((inquiry) =>
                inquiry.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
            .map((inquiry, index) => (
              <tr key={12}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{inquiry.name}</div>
                    </div>
                  </div>
                </td>
                <td>{inquiry.email}</td>
                <td>
                  {inquiry.phone}
                 
                </td>
                <td>{inquiry.message?.slice(0, 20)}...</td>
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
            currentPage * feedbacksPerPage>=inquiries.length
              ? "cursor-not-allowed bg-gray-300"
              : ""
          } py-2 px-4 rounded-md border border-[#ED0058] bg-[#ED0058] hover:bg-white text-white hover:text-black transition-all ease-in-out duration-300`}
            onClick={() => {if(currentPage * feedbacksPerPage < inquiries.length){paginate(currentPage + 1)}} }
            disabled={currentPage * feedbacksPerPage>= inquiries.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersInquiries;
