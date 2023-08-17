import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const ContactInfo = () => {
  return (
    <div className="bg-blue-950 py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-2 md:w-96 w-full py-10 bg-white hover:scale-110 duration-300">
          <div className="bg-[#ED0058] hover:bg-yellow-500 duration-300 w-16 h-16 flex items-center justify-center rounded-full">
            <FaMapMarkerAlt className="text-2xl text-white" />
          </div>
          <h1 className="text-lg font-bold text-black hover:text-[#ED0058] duration-300">
            Our Address
          </h1>
          <p className="text-sm text-black font-extralight">
            P.O. Box 152 Lakewood, NJ 08701 New York
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 md:w-96 w-full py-10 bg-white hover:scale-110 duration-300">
          <div className="bg-[#ED0058] hover:bg-yellow-500 duration-300 w-16 h-16 flex items-center justify-center rounded-full">
            <FiMail className="text-2xl text-white" />
          </div>
          <h1 className="text-lg font-bold text-black hover:text-[#ED0058] duration-300">
            Send Us an Email
          </h1>
          <p className="text-sm text-black font-extralight">
            chemistry-corner@support.com
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 md:w-96 w-full py-10 bg-white hover:scale-110 duration-300">
          <div className="bg-[#ED0058] hover:bg-yellow-500 duration-300 w-16 h-16 flex items-center justify-center rounded-full">
            <FaPhone className="text-2xl text-white" />
          </div>
          <h1 className="text-lg font-bold text-black hover:text-[#ED0058] duration-300">
            Give Us a Ring
          </h1>
          <p className="text-sm text-black font-extralight">
            +01 123 456 789 00
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
