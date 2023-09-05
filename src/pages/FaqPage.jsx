import { Helmet } from "react-helmet-async";
import { BsGear, BsChatSquareText } from "react-icons/bs";
import { CiLogin, CiLock } from "react-icons/ci";
import { LiaUser } from "react-icons/lia";
import { GiSettingsKnobs } from "react-icons/gi";
import { PiCodeSimpleLight } from "react-icons/pi";
import { GoCheckbox } from "react-icons/go";
import { Link } from "react-router-dom";

const FaqPage = () => {
  return (
    <div>
      <Helmet>
        <title>Helpdesk - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold"> How can we help?</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full md:w-2/3 mx-auto my-20">
        <div className="p-10 w-full flex flex-col items-center gap-8 group hover:bg-gray-100 duration-300">
          <BsGear className="text-5xl text-[#ED0058]" />
          <h1 className="text-gray-500 group-hover:text-black duration-300">
            Getting Started
          </h1>
        </div>
        <div className="p-10 w-full flex flex-col items-center gap-8 group hover:bg-gray-100 duration-300">
          <CiLogin className="text-5xl text-[#ED0058]" />
          <h1 className="text-gray-500 group-hover:text-black duration-300">
            User Login
          </h1>
        </div>
        <div className="p-10 w-full flex flex-col items-center gap-8 group hover:bg-gray-100 duration-300">
          <LiaUser className="text-5xl text-[#ED0058]" />
          <h1 className="text-gray-500 group-hover:text-black duration-300">
            My Account
          </h1>
        </div>
        <div className="p-10 w-full flex flex-col items-center gap-8 group hover:bg-gray-100 duration-300">
          <CiLock className="text-5xl text-[#ED0058]" />
          <h1 className="text-gray-500 group-hover:text-black duration-300">
            Security
          </h1>
        </div>
        <div className="p-10 w-full flex flex-col items-center gap-8 group hover:bg-gray-100 duration-300">
          <BsChatSquareText className="text-5xl text-[#ED0058]" />
          <h1 className="text-gray-500 group-hover:text-black duration-300">
            Communication
          </h1>
        </div>
        <div className="p-10 w-full flex flex-col items-center gap-8 group hover:bg-gray-100 duration-300">
          <GiSettingsKnobs className="text-5xl text-[#ED0058]" />
          <h1 className="text-gray-500 group-hover:text-black duration-300">
            Settings Option
          </h1>
        </div>
        <div className="p-10 w-full flex flex-col items-center gap-8 group hover:bg-gray-100 duration-300">
          <PiCodeSimpleLight className="text-5xl text-[#ED0058]" />
          <h1 className="text-gray-500 group-hover:text-black duration-300">
            Customization
          </h1>
        </div>
        <div className="p-10 w-full flex flex-col items-center gap-8 group hover:bg-gray-100 duration-300">
          <GoCheckbox className="text-5xl text-[#ED0058]" />
          <h1 className="text-gray-500 group-hover:text-black duration-300">
            User Rating
          </h1>
        </div>
      </div>
      <div className="h-[2px] bg-gray-500 w-2/3 mx-auto opacity-20"></div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-0 w-2/3 mx-auto my-20">
        <h1 className="text-black text-xl">
          Didn&apos;t find an answer to your question?{" "}
        </h1>
        <Link to="/contact-us">
          <button className="px-10 py-5 border border-gray-300 text-[#ED0058] rounded-md bg-white hover:bg-[#ED0058] hover:text-white hover:border-[#ED0058] hover:shadow-xl duration-300 uppercase">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FaqPage;
