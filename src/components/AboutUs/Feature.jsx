import { FaBandcamp, FaFilter, FaUser } from "react-icons/fa";
import { LiaComment } from "react-icons/lia";
import Container from "../shared/Container";
const Feature = () => {
  return (
    <div className="container mx-auto my-20 bg-pink-100">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  items-center justify-center gap-14">
          <div className="w-64 md:w-96">
            <FaUser className="text-3xl text-[#ED0058] mb-5" />
            <h1 className="text-2xl font-signature text-black mb-3">
              Simple to Use
            </h1>
            <p className="text-sm text-black max-w md:max-w-xs text-justify">
              Chemistry Corner is very easy to use - just choose your and your
              partner’s gender, age, and location, and you’re all set!
            </p>
          </div>
          <div className="w-64 md:w-96">
            <FaBandcamp className="text-3xl text-[#ED0058] mb-5" />
            <h1 className="text-2xl font-signature text-black mb-3">
              Smart Matching
            </h1>
            <p className="text-sm text-black max-w-xs text-justify">
              Our matching system is based on geolocation and interests. It
              helps you find the best people to meet or spend time with.
            </p>
          </div>
          <div className="w-64 md:w-96">
            <LiaComment className="text-3xl text-[#ED0058] mb-5" />
            <h1 className="text-2xl font-signature text-black mb-3">
              Cool Community
            </h1>
            <p className="text-sm text-black max-w-xs text-justify">
              Besides being #1 dating service, we have a supportive and
              understanding community that’s always ready to help.
            </p>
          </div>
          <div className="w-64 md:w-96">
            <FaFilter className="text-3xl text-[#ED0058] mb-5" />
            <h1 className="text-2xl font-signature text-black mb-3">
              Quick Filtering
            </h1>
            <p className="text-sm text-black max-w-xs text-justify">
              Our agents are ready to offer extensive support on any tour with
              traveling guidance & recommendations.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feature;
