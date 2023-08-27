import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaMapMarkerAlt } from "react-icons/fa";
import { getComplexSearch } from "../../api/fetch";
import { useLocation } from "react-router-dom";

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
        <title>Countries - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-64 bg-no-repeat bg-cover bg-center overflow-hidden">
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
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Search by Location ..."
              />
            </div>

            <button className="bg-[#ED0058] py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              Search
            </button>
          </div>
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
                <div className="md:w-[800px] grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-5 rounded-xl">
                  <article
                    className="mx-auto max-w-sm shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-xl"
                    style={{
                      backgroundImage: `url(${member?.image})`,
                    }}
                  >
                    <div className="bg-black bg-opacity-20 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300 rounded-xl px-12 pb-8">
                      <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        {member?.name}
                      </h1>
                      <p>
                        <span className="flex items-center pb-3 gap-1 text-sm leading-normal text-[#adc4e4] font-bold uppercase">
                          <FaMapMarkerAlt />
                          {member?.country}
                        </span>
                      </p>
                      <div className="w-16 h-2 bg-yellow-500 mb-8 transform translate-y-8 group-hover:translate-y-0 duration-300"></div>
                      <p className="opacity-0 text-white text-xl group-hover:opacity-80  transform duration-500">
                        {member?.bio}
                      </p>
                    </div>
                  </article>
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
