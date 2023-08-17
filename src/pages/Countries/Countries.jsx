import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaMapMarkerAlt } from "react-icons/fa";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/members?search=${search}`)
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
      });
  }, [search]);

  const handleSearch = () => {
    console.log("handleSearch called");
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={searchRef}
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
            {countries.map((country) => (
              <div
                className="grid sm:grid-cols-3 md:border-4 shadow-2xl shadow-black/[0.2] rounded-3xl md:bg-gray-100"
                key={country._id}
              >
                <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                  <img
                    className="absolute md:object-cover md:w-full h-full rounded"
                    src={country.photo}
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                  <p className="text-lg font-bold">{country.name}</p>
                  <p className="mb-4 text-sm tracking-wide text-gray-800">
                    {country.bio}
                  </p>
                  <p>
                    <span className="flex items-center py-3 gap-1 text-sm leading-normal text-[#6d7683] font-bold uppercase">
                      <FaMapMarkerAlt />
                      {country.location}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
