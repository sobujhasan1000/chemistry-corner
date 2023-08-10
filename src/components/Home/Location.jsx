import React from "react";
import { FaSearch } from "react-icons/fa";
import Container from "../shared/Container";
import Heading from "../shared/Heading";

const Location = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-1 md:pt-24 pt-4 pb-8">
          <div className="md:h-64 relative overflow-hidden transition duration-300 transform rounded-xl shadow-xl lg:hover:-translate-y-2 hover:shadow-2xl mx-2 my-2">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://ld-wt73.template-help.com/tf/loven/images/destinations-1-363x260.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">Amsterdam</p>

              <div className="flex items-center justify-center space-x-3 mb-4">
                <a
                  href="/"
                  className="text-[#db2777] bg-white transition-colors duration-300 hover:text-teal-accent-400 px-4 py-2 font-bold rounded-lg"
                >
                  <p>From 650$</p>
                </a>
              </div>
            </div>
          </div>

          <div className="md:h-64 relative overflow-hidden transition duration-300 transform rounded-xl shadow-xl lg:hover:-translate-y-2 hover:shadow-2xl mx-2 my-2">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://ld-wt73.template-help.com/tf/loven/images/destinations-2-363x260.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">London</p>

              <div className="flex items-center justify-center space-x-3 mb-4">
                <a
                  href="/"
                  className="text-[#db2777] bg-white transition-colors duration-300 hover:text-teal-accent-400 px-4 py-2 font-bold rounded-lg"
                >
                  <p>From 500$</p>
                </a>
              </div>
            </div>
          </div>

          <div className="md:h-64 relative overflow-hidden transition duration-300 transform rounded-xl shadow-xl lg:hover:-translate-y-2 hover:shadow-2xl mx-2 my-2">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://ld-wt73.template-help.com/tf/loven/images/destinations-3-363x260.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">Barcelona</p>

              <div className="flex items-center justify-center space-x-3 mb-4">
                <a
                  href="/"
                  className="text-[#db2777] bg-white transition-colors duration-300 hover:text-teal-accent-400 px-4 py-2 font-bold rounded-lg"
                >
                  <p>From 800$</p>
                </a>
              </div>
            </div>
          </div>

          <div className="md:h-64 relative overflow-hidden transition duration-300 transform rounded-xl shadow-xl lg:hover:-translate-y-2 hover:shadow-2xl mx-2 my-2">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://ld-wt73.template-help.com/tf/loven/images/destinations-4-363x260.jpg"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">New York</p>

              <div className="flex items-center justify-center space-x-3 mb-4">
                <a
                  href="/"
                  className="text-[#db2777] bg-white transition-colors duration-300 hover:text-teal-accent-400 px-4 py-2 font-bold rounded-lg"
                >
                  <p>From 670$</p>
                </a>
              </div>
            </div>
          </div>

          <div className="md:h-64 relative overflow-hidden transition duration-300 transform rounded-xl  lg:hover:-translate-y-2  mx-2 my-2"></div>

          <div className="md:h-64 relative overflow-hidden transition duration-300 transform rounded-xl shadow-xl lg:hover:-translate-y-2 hover:shadow-2xl mx-2 my-2">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://media.istockphoto.com/id/1048467886/photo/street-scene-in-historic-center-of-mexico-city.jpg?s=612x612&w=0&k=20&c=aatvitXYaowQl1mb5ZTBrfq0yFllChMJx-VuMnrubuY="
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">Mexico</p>

              <div className="flex items-center justify-center space-x-3 mb-4">
                <a
                  href="/"
                  className="text-[#db2777] bg-white transition-colors duration-300 hover:text-teal-accent-400 px-4 py-2 font-bold rounded-lg"
                >
                  <p>From 350$</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 w-full flex flex-col justify-center items-center">
          <Heading
            title={"Meet Singles in Your Area"}
            subTitle={
              "If you want to meet local singles for dating, companionship, friendship, or even more, you have come to the right place."
            }
          />
          <button className="bg-[#ED0058] hover:bg-[#a33f64] text-white p-4 md:px-6 md:py-4 md:text-2xl capitalize rounded flex items-center">
            <FaSearch className="mr-2" />
            <span>Find your partner</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Location;
