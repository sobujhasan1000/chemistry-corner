import { FaBandcamp, FaFilter, FaUser } from "react-icons/fa";
import { LiaComment } from "react-icons/lia";
import Container from "../shared/Container";
const Feature = () => {
  return (
    <div className="container mx-auto my-20">
      <Container>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <div className="relative bg-pink-200 py-6 px-6 rounded-xl w-64 my-4 shadow-xl">
              <div className=" text-white bg-yellow-500 flex items-center absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6">
                <FaUser className="text-3xl text-black" />
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">Simple to Use</p>
                <div className="border-t-2"></div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  <p className="text-sm text-black max-w md:max-w-xs">
                    Chemistry Corner is very easy to use - just choose your and
                    your partner&apos;s gender, age, and location, and you&apos;re all
                    set!
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-pink-200 py-6 px-6 rounded-xl w-64 my-4 shadow-xl">
              <div className=" text-white bg-yellow-500 flex items-center absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6">
                <FaBandcamp className="text-3xl text-black" />
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">Smart Matching</p>
                <div className="border-t-2"></div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  <p className="text-sm text-black max-w md:max-w-xs">
                    Our matching system is based on geolocation and interests.
                    It helps you find the best people to meet or spend time
                    with.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-pink-200 py-6 px-6 rounded-xl w-64 my-4 shadow-xl">
              <div className=" text-white bg-yellow-500 flex items-center absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6">
                <LiaComment className="text-3xl text-black" />
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">Cool Community</p>
                <div className="border-t-2"></div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  <p className="text-sm text-black max-w md:max-w-xs">
                    Besides being #1 dating service, we have a supportive and
                    understanding community that&apos;s always ready to help.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-pink-200 py-6 px-6 rounded-xl w-64 my-4 shadow-xl">
              <div className=" text-white bg-yellow-500 flex items-center absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6">
                <FaFilter className="text-3xl text-black" />
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold my-2">Quick Filtering</p>
                <div className="border-t-2"></div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  <p className="text-sm text-black max-w md:max-w-xs">
                    Our agents are ready to offer extensive support on any tour
                    with traveling guidance & recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feature;
