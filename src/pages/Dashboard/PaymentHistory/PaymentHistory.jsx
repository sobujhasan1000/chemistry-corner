import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BiTrash } from "react-icons/bi";
import { getAllPayments } from "../../../api/fetch";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State to track the search query

  useEffect(() => {
    getAllPayments().then((data) => setPayments(data));
  }, []);

  const tableHeadings = [
    "Si No",
    "Name",
    "Email",
    "Package",
    "Transaction ID",
    "Amount",
    " ",
  ];

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  // Filter payments based on the search query
  const filteredPayments = payments.filter((payment) =>
    payment.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedPayments = filteredPayments.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Helmet>
        <title>Payment History - Chemistry Corner</title>
      </Helmet>
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="mr-2">Rows per page:</label>
          <select
            className="border border-gray-300 rounded-md px-2 py-1"
            value={perPage}
            onChange={(e) => {
              setCurrentPage(1);
              setPerPage(parseInt(e.target.value));
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search by Name"
          className="border border-gray-300 rounded-md px-2 py-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              {tableHeadings.map((heading, i) => (
                <th
                  key={i}
                  className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 capitalize tracking-wider"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedPayments.map((payment, i) => (
              <tr key={i} className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {i + 1 + startIndex}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {payment?.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {payment?.email}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {payment?.package}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {payment?.transactionId}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  ${payment?.price}
                </td>
                <td>
                  <button
                    title="Delete"
                    className="rounded-md hover:bg-[#ED0058] bg-white p-2 hover:text-white text-black border border-[#ED0058] transition-all ease-in-out duration-300"
                  >
                    <BiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className={`mr-2 ${
            currentPage === 1
              ? "cursor-not-allowed bg-gray-300"
              : "hover:bg-gray-200 bg-white"
          } py-2 px-4 rounded-md border border-gray-300`}
          onClick={() => {
            if (currentPage > 1) {
              handlePageChange(currentPage - 1);
            }
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`${
            currentPage * perPage >= filteredPayments.length
              ? "cursor-not-allowed bg-gray-300"
              : "hover:bg-gray-200 bg-white"
          } py-2 px-4 rounded-md border border-gray-300`}
          onClick={() => {
            if (currentPage * perPage < filteredPayments.length) {
              handlePageChange(currentPage + 1);
            }
          }}
          disabled={currentPage * perPage >= filteredPayments.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentHistory;
