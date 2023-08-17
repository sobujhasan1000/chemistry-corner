import React, { useEffect, useState } from "react";
import Container from "../shared/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import membersBg from "../../assets/membersBg.jpg";
import { Helmet } from "react-helmet-async";
import {
  getAllMembers,
  getGenderWiseMembers,
  membersSearch,
} from "../../api/fetch";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllMembers().then((data) => setMembers(data));
  }, []);

  const handleMembers = (gender) => {
    getGenderWiseMembers(gender).then((data) => setMembers(data));
  };

  const genderLists = [
    { label: "all", value: "" },
    { label: "male", value: "male" },
    { label: "female", value: "female" },
    { label: "non-binary", value: "non-binary" },
  ];

  const handleSearch = () => {
    membersSearch(search).then((member) => setMembers(member));
  };
  return (
    <div style={{ backgroundImage: `url(${membersBg})` }}>
      <Helmet>
        <title>Members - Chemistry Corner</title>
      </Helmet>
      <Container>
        <div className="py-8 flex justify-center px-20">
          <div>
            <h1 className="text-center mb-4 text-4xl font-bold">Search</h1>
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
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-gray-100 outline-none"
                  type="text"
                  placeholder="Search by name ..."
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
        <div className="text-center">
          <Tabs>
            <TabList className="text-center flex items-center justify-center gap-3 py-3">
              {genderLists.map((item, i) => (
                <Tab
                  key={i}
                  onClick={() => handleMembers(item?.value)}
                  className="bg-[#ED0058] hover:bg-[#ed0057b0] text-white capitalize font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl"
                >
                  {item?.label}
                </Tab>
              ))}
            </TabList>
            <TabPanel>
              <div className="grid justify-center items-center gap-2 sm:grid-cols-3 pt-24 pb-4">
                {members.map((item) => (
                  <div
                    className="card w-96 rounded-3xl shadow-xl flex justify-center items-center mx-auto my-16 "
                    key={item?._id}
                  >
                    <div className="p-1 rounded-3xl transform-gpu transition-all selection:bg-sky-100 h-full grid place-items-center bg-gradient-to-tl to-[#FFD3A5] from-[#FD6585] dark:selection:bg-white/10">
                      <div className="bg-white px-12 pt-16 pb-14 shadow-2xl shadow-black/[0.2] rounded-3xl text-center flex flex-col justify-center max-w-md transition-colors dark:bg-neutral-800">
                        <div className="select-none">
                          <img
                            src={item?.photo}
                            className="shadow-2xl shadow-black/[0.2] rounded-3xl h-60 w-60 mx-auto -mt-40 transform-gpu transition-all hover:scale-125"
                            style={{ userSelect: "none" }}
                            alt="avatar"
                          />
                        </div>

                        <h1 className="mt-12 text-3xl font-bold text-slate-800 dark:text-white">
                          {item?.name}
                        </h1>

                        <p className="mt-4 text-slate-600 dark:text-white/90">
                          {item?.bio}
                        </p>
                        <p>
                          <span className="flex justify-center items-center py-3 gap-1 text-sm leading-normal text-[#94A3B8] font-bold uppercase">
                            <FaMapMarkerAlt />
                            {item?.location}
                          </span>
                        </p>

                        <div className="card-actions">
                          <a
                            href={`female/${item._id}`}
                            className="btn bg-[#FD6585] hover:bg-[#ED0058] w-full"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            {genderLists.map((i) => (
              <TabPanel key={i}>
                <div className="grid justify-center items-center gap-2 sm:grid-cols-3 pt-24 pb-4">
                  {members.map((item) => (
                    <div
                      className="card w-96 rounded-3xl shadow-xl flex justify-center items-center mx-auto my-16 "
                      key={item._id}
                    >
                      <div className="p-1 rounded-3xl transform-gpu transition-all selection:bg-sky-100 h-full grid place-items-center bg-gradient-to-tl to-[#FFD3A5] from-[#FD6585] dark:selection:bg-white/10">
                        <div className="bg-white px-12 pt-16 pb-14 shadow-2xl shadow-black/[0.2] rounded-3xl text-center flex flex-col justify-center max-w-md transition-colors dark:bg-neutral-800">
                          <div className="select-none">
                            <img
                              src={item.photo}
                              className="shadow-2xl shadow-black/[0.2] rounded-3xl h-60 w-60 mx-auto -mt-40 transform-gpu transition-all hover:scale-125"
                              style={{ userSelect: "none" }}
                              alt="avatar"
                            />
                          </div>

                          <h1 className="mt-12 text-3xl font-bold text-slate-800 dark:text-white">
                            {item.name}
                          </h1>

                          <p className="mt-4 text-slate-600 dark:text-white/90">
                            {item.bio}
                          </p>
                          <p>
                            <span className="flex justify-center items-center py-3 gap-1 text-sm leading-normal text-[#94A3B8] font-bold uppercase">
                              <FaMapMarkerAlt />
                              {item.location}
                            </span>
                          </p>

                          <div className="card-actions">
                            <a
                              href={`female/${item._id}`}
                              className="btn bg-[#FD6585] hover:bg-[#ED0058] w-full"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Members;
