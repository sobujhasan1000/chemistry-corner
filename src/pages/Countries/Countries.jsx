import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaMapMarkerAlt } from "react-icons/fa";
import { getAllMembers, membersSearchByLocation } from "../../api/fetch";

const Countries = () => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    getAllMembers().then((data) => setMembers(data));
  }, []);

  const handleSearch = () => {
    membersSearchByLocation(search).then((data) => setMembers(data));
  };

  const totalMembers = members.length;
  const totalPages = Math.ceil(totalMembers / itemsPerPage);

  const indexOfLastMember = currentPage * itemsPerPage;
  const indexOfFirstMember = indexOfLastMember - itemsPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToPreviousPage = () => {
    goToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    goToPage(currentPage + 1);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-3 py-1 rounded-md ${
            currentPage === i
              ? "bg-pink-500 text-white"
              : "bg-pink-300 text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageButtons;
  };

  return (
    <div>
      <Helmet>
        <title>Countries - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl font-bold pb-2">
            Find Your Partner with Location.
          </h1>
          <div className="flex items-center p-2 space-x-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex bg-gray-100 p-2 w-45 space-x-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Search by Location ..."
              />
            </div>

            <button
              onClick={handleSearch}
              className="bg-[#ED0058] py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
          <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
            <p className="inline-block px-3 py-px mb-4 text-3xl font-semibold tracking-wider text-gray-900 uppercase rounded-full bg-teal-accent-400">
              Welcome our new members.
            </p>
          </div>
          <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
            {currentMembers.map((member) => (
              <div
                className="grid sm:grid-cols-3 md:border-4 shadow-2xl shadow-black/[0.2] rounded-3xl md:bg-gray-100"
                key={member?._id}
              >
                <div className="relative w-full h-48 max-h-full rounded-2xl shadow sm:h-auto">
                  <img
                    className="absolute md:object-cover md:w-full h-full rounded-2xl"
                    src={member?.image}
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                  <p className="text-lg font-bold">{member?.name}</p>
                  <p className="mb-4 text-sm tracking-wide text-gray-800">
                    {member?.bio}
                  </p>
                  <p>
                    <span className="flex items-center py-3 gap-1 text-sm leading-normal text-[#6d7683] font-bold uppercase">
                      <FaMapMarkerAlt />
                      {member?.country}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-12 space-x-2">
            <button
              onClick={goToPreviousPage}
              className="px-3 py-1 rounded-md bg-pink-200 hover:bg-pink-400"
            >
              Previous
            </button>
            {renderPageButtons()}
            <button
              onClick={goToNextPage}
              className="px-3 py-1 rounded-md bg-pink-200 hover:bg-pink-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
