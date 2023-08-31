import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaMapMarkerAlt } from "react-icons/fa";
import { getComplexSearch } from "../../api/fetch";
import { Link, useLocation } from "react-router-dom";
const FindPartner = () => {
  const [members, setMembers] = useState([]);
  console.log(members);
  const location = useLocation();
  const { gender, minAge, maxAge, country } = location.state;
  console.log(gender, minAge, maxAge, country);
  useEffect(() => {
    getComplexSearch(gender, minAge, maxAge, country).then((data) =>
      setMembers(data)
    );
  }, [gender, minAge, maxAge, country]);

  return (
    <div>
      <Helmet>
        <title>Find Partner - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-64 bg-no-repeat bg-cover bg-center overflow-hidden">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl font-bold pb-2">
            Search Results.
          </h1>
          {/* <div className="flex items-center p-2 space-x-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
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
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Search by Location ..."
              />
            </div>

            <button className="bg-[#ED0058] py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              Search
            </button>
          </div> */}
        </div>
      </div>
      <div>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
          <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
            <p className="inline-block px-3 mb-4 text-3xl font-semibold tracking-wider text-gray-900 uppercase rounded-full bg-teal-accent-400">
              Find Your Partner For Your Relationship.
            </p>
          </div>
          <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg overflow-hidden">
            {members.map((member) => (
              <div
                key={member._id}
                className="mx-auto p-4 md:py-20 px-0 md:p-8 md:px-0 antialiased"
              >
                <div className="max-w-[405px] order-first">
                  <div className="relative after:bg-pink-200 after:w-full after:bottom-0 after:left-0 after:content[''] after:h-[75%] after:absolute after:rounded-xl">
                    <div className="text-center pb-6 relative z-10 sm:px-4 lg:px-11">
                      <div className="pb-5">
                        <img
                          className="md:w-[250px] md:h-[250px] lg:w-[290px] lg:h-[290px] rounded-full mx-auto border border-pink-400 p-1"
                          src={member?.image}
                          alt=""
                        />
                      </div>
                      <h4 className="text-primary text-2xl capitalize font-bold">
                        {member?.name}
                      </h4>
                      <span>{member?.bio}</span>
                    </div>

                    <div className="border-t border-pink-400 py-6 px-12 z-10 relative">
                      <div className="flex items-center gap-2">
                        <span className="border border-pink-400 text-accent1 w-9 h-9 rounded-full flex items-center justify-center">
                          <FaMapMarkerAlt />
                        </span>
                        <span className="ltr:pl-4 rtl:pr-4 text-[18px]">
                          <a
                            className="hover:text-accent1"
                            href="tel:+01215656855"
                          >
                            +01215656855
                          </a>
                        </span>
                      </div>

                      <div className="flex items-center mt-5 gap-2">
                        <span className="border border-pink-400 text-accent1 w-9 h-9 rounded-full flex items-center justify-center">
                          <svg
                            className="max-w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </span>
                        <span className="ltr:pl-4 rtl:pr-4 text-[18px]">
                          <a
                            className="hover:text-accent1"
                            href="mailto:exampal@gmail.com"
                          >
                            {member?.country}
                          </a>
                        </span>
                      </div>

                      <div className="flex items-center mt-5 gap-2">
                        <span className="border border-pink-400 text-accent1 w-9 h-9 rounded-full flex items-center justify-center">
                          <svg
                            className="max-w-5"
                            width="16"
                            height="34"
                            fill="currentColor"
                            stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"></path>
                          </svg>
                        </span>
                        <span className="ltr:pl-4 rtl:pr-4 text-[18px]">
                          fulbariFranciso,4200.
                        </span>
                      </div>
                      <div className="card-actions mt-4">
                        <Link
                          to={`/view-profile/${member._id}`}
                          className="btn bg-[#FD6585] hover:bg-[#ED0058] w-full text-white border-0"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPartner;
