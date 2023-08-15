import React, { useEffect, useRef, useState } from "react";
import Container from "../shared/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import membersBg from "../../assets/membersBg.jpg";

const Members = () => {
  const [males, setMales] = useState([]);
  const [females, setFemales] = useState([]);
  const [binaries, setBinaries] = useState([]);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/male?search=${search}`)
      .then((res) => res.json())
      .then((result) => {
        setMales(result);
      });
  }, [search]);

  useEffect(() => {
    fetch(`http://localhost:5000/female?search=${search}`)
      .then((res) => res.json())
      .then((result) => {
        setFemales(result);
      });
  }, [search]);

  useEffect(() => {
    fetch(`http://localhost:5000/non-binary?search=${search}`)
      .then((res) => res.json())
      .then((result) => {
        setBinaries(result);
      });
  }, [search]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };
  return (
    <div style={{ backgroundImage: `url(${membersBg})` }}>
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
                  ref={searchRef}
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
              <Tab className="bg-[#ED0058] hover:bg-[#ed0057b0] text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl">
                Male
              </Tab>
              <Tab className="bg-[#ED0058] hover:bg-[#ed0057b0] text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl">
                Female
              </Tab>
              <Tab className="bg-[#ED0058] hover:bg-[#ed0057b0] text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl">
                Non Binary
              </Tab>
            </TabList>

            <TabPanel>
              <div className="grid justify-center items-center gap-2 sm:grid-cols-2 pt-24 pb-4">
                {males.map((male) => (
                  <div
                    className="card w-96 rounded-3xl shadow-xl flex justify-center items-center mx-auto my-16 "
                    key={male._id}
                  >
                    <div className="p-1 rounded-3xl transform-gpu transition-all selection:bg-sky-100 h-full grid place-items-center bg-gradient-to-tl to-[#FFD3A5] from-[#FD6585] dark:selection:bg-white/10">
                      <div className=" bg-white px-12 pt-16 pb-14 shadow-2xl shadow-black/[0.2] rounded-3xl text-center flex flex-col justify-center max-w-md transition-colors dark:bg-neutral-800">
                        <div className="select-none">
                          <img
                            src={male.photo}
                            style={{ userSelect: "none" }}
                            alt="avatar"
                          />
                        </div>

                        <h1 className="mt-12 text-3xl font-bold text-slate-800 dark:text-white">
                          {male.name}
                        </h1>

                        <p className="mt-4 text-slate-600 dark:text-white/90">
                          {male.bio}
                        </p>
                        <p>
                          <span className="flex justify-center items-center py-3 gap-1 text-sm leading-normal text-[#94A3B8] font-bold uppercase">
                            <FaMapMarkerAlt />
                            {male.location}
                          </span>
                        </p>

                        <div className="card-actions">
                          <a
                            href={`male/${male._id}`}
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
            <TabPanel>
              <div className="grid justify-center items-center gap-2 sm:grid-cols-2 pt-24 pb-4">
                {females.map((female) => (
                  <div
                    className="card w-96 rounded-3xl shadow-xl flex justify-center items-center mx-auto my-16 "
                    key={female._id}
                  >
                    <div className="p-1 rounded-3xl transform-gpu transition-all selection:bg-sky-100 h-full grid place-items-center bg-gradient-to-tl to-[#FFD3A5] from-[#FD6585] dark:selection:bg-white/10">
                      <div className="bg-white px-12 pt-16 pb-14 shadow-2xl shadow-black/[0.2] rounded-3xl text-center flex flex-col justify-center max-w-md transition-colors dark:bg-neutral-800">
                        <div className="select-none">
                          <img
                            src={female.photo}
                            className="shadow-2xl shadow-black/[0.2] rounded-3xl h-60 w-60 mx-auto -mt-40 transform-gpu transition-all hover:scale-125"
                            style={{ userSelect: "none" }}
                            alt="avatar"
                          />
                        </div>

                        <h1 className="mt-12 text-3xl font-bold text-slate-800 dark:text-white">
                          {female.name}
                        </h1>

                        <p className="mt-4 text-slate-600 dark:text-white/90">
                          {female.bio}
                        </p>
                        <p>
                          <span className="flex justify-center items-center py-3 gap-1 text-sm leading-normal text-[#94A3B8] font-bold uppercase">
                            <FaMapMarkerAlt />
                            {female.location}
                          </span>
                        </p>

                        <div className="card-actions">
                          <a
                            href={`female/${female._id}`}
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
            <TabPanel>
              <div className="grid justify-center items-center gap-2 sm:grid-cols-2 pt-24 pb-4">
                {binaries.map((binary) => (
                  <div
                    className="card w-96 rounded-3xl shadow-xl flex justify-center items-center mx-auto my-16 "
                    key={binary._id}
                  >
                    <div className="p-1 rounded-3xl transform-gpu transition-all selection:bg-sky-100 h-full grid place-items-center bg-gradient-to-tl to-[#FFD3A5] from-[#FD6585] dark:selection:bg-white/10">
                      <div className="bg-white px-12 pt-16 pb-14 shadow-2xl shadow-black/[0.2] rounded-3xl text-center flex flex-col justify-center max-w-md transition-colors dark:bg-neutral-800">
                        <div className="select-none">
                          <img
                            src={binary.photo}
                            className=" shadow-2xl shadow-black/[0.2] rounded-3xl h-60 w-60 mx-auto -mt-40 transform-gpu transition-all hover:scale-125"
                            style={{ userSelect: "none" }}
                            alt="avatar"
                          />
                        </div>

                        <h1 className="mt-12 text-3xl font-bold text-slate-800 dark:text-white">
                          {binary.name}
                        </h1>

                        <p className="mt-4 text-slate-600 dark:text-white/90">
                          {binary.bio}
                        </p>
                        <p>
                          <span className="flex justify-center items-center py-3 gap-1 text-sm leading-normal text-[#94A3B8] font-bold uppercase">
                            <FaMapMarkerAlt />
                            {binary.location}
                          </span>
                        </p>

                        <div className="card-actions">
                          <a
                            href={`binary/${binary._id}`}
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
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Members;
