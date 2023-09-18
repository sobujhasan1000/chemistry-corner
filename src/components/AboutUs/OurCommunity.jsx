import { HiOutlineEmojiHappy } from "react-icons/hi";
import { PiUsersLight } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";
import { LiaComment } from "react-icons/lia";
const OurCommunity = () => {
  return (
    <div className="bg-[#ED0058] flex flex-col items-center justify-center py-16 gap-8">
      <h1 className="text-white text-3xl font-bold uppercase">Our Community</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center gap-8 mx-4">
        <div className="bg-white flex flex-col items-center justify-center px-10 md:px-16 py-10 md:py-10 gap-2 rounded">
          <div className="bg-yellow-500 w-16 h-16 flex items-center justify-center rounded-full">
            <HiOutlineEmojiHappy className="text-4xl text-black" />
          </div>
          <h4 className="text-base text-black">Happy Clients</h4>
          <h1 className="text-xl text-[#ED0058]">3224</h1>
        </div>
        <div className="bg-white flex flex-col items-center justify-center px-10 md:px-16 py-10 md:py-10 gap-2 rounded">
          <div className="bg-yellow-500 w-16 h-16 flex items-center justify-center rounded-full">
            <PiUsersLight className="text-4xl text-black" />
          </div>
          <h4 className="text-base text-black">Verification</h4>
          <h1 className="text-xl text-[#ED0058]">6484</h1>
        </div>
        <div className="bg-white flex flex-col items-center justify-center px-10 md:px-16 py-10 md:py-10 gap-2 rounded">
          <div className="bg-yellow-500 w-16 h-16 flex items-center justify-center rounded-full">
            <FiCheckCircle className="text-4xl text-black" />
          </div>
          <h4 className="text-base text-black">Attention</h4>
          <h1 className="text-xl text-[#ED0058]">4531</h1>
        </div>
        <div className="bg-white flex flex-col items-center justify-center px-10 md:px-16 py-10 md:py-10 gap-2 rounded">
          <div className="bg-yellow-500 w-16 h-16 flex items-center justify-center rounded-full">
            <LiaComment className="text-4xl text-black" />
          </div>
          <h4 className="text-base text-black">Communication</h4>
          <h1 className="text-xl text-[#ED0058]">2478</h1>
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
