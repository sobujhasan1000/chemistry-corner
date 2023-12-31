import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { getComplexSearch } from "../../api/fetch";
import { Link, useLocation } from "react-router-dom";
const FindPartner = () => {
  const [members, setMembers] = useState([]);
  const location = useLocation();
  const { gender, minAge, maxAge, country } = location.state;
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
        </div>
      </div>
      <div>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
          <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
            <p className="inline-block px-3 mb-4 text-3xl font-semibold tracking-wider text-gray-900 uppercase rounded-full bg-teal-accent-400">
              Find Your Partner For Your Relationship.
            </p>
          </div>
          {members.length === 0 && (
            <div className="h-screen flex justify-center w-full">
              <p className="text-[#ED0058] text-2xl">No data Found</p>
            </div>
          )}
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
                          <FaPhone />
                        </span>
                        <span className="ltr:pl-4 rtl:pr-4 text-[18px]">
                          <a
                            className="hover:text-accent1"
                            href="tel:+01215656855"
                          >
                            {member?.contact}
                          </a>
                        </span>
                      </div>

                      <div className="flex items-center mt-5 gap-2">
                        <span className="border border-pink-400 text-accent1 w-9 h-9 rounded-full flex items-center justify-center">
                          <HiOutlineMail />
                        </span>
                        <span className="ltr:pl-4 rtl:pr-4 text-[18px]">
                          <a
                            className="hover:text-accent1"
                            href="mailto:exampal@gmail.com"
                          >
                            {member?.email}
                          </a>
                        </span>
                      </div>

                      <div className="flex items-center mt-5 gap-2">
                        <span className="border border-pink-400 text-accent1 w-9 h-9 rounded-full flex items-center justify-center">
                          <FaLocationDot />
                        </span>
                        <span className="ltr:pl-4 rtl:pr-4 text-[18px] uppercase">
                          {member?.country}
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
