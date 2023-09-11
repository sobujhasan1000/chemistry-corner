import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { AiOutlineCamera } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

const ChatArea = () => {
  return (
    <div>
      <div className="p-4 h-screen">
        <div className="flex justify-between items-center mb-3">
          <div className="flex space-x-3">
            <img
              src="https://i.ibb.co/XF1BGvx/tamara-bellis-Brl7bqld05-E-unsplash.jpg"
              alt="profile"
              className="rounded-full w-10 h-9 object-cover"
            />
            <div className="text-lg text-slate-700 font-sans mt-2 flex space-x-2">
              <p>Joanna Gonzalez</p>
              <div className="w-1 h-1 p-1 bg-green-500 rounded-full mt-2"></div>
            </div>
          </div>
          <div className="flex space-x-2 mt-3">
            <FiSearch className="w-4 h-4 text-gray-500" />
            <AiOutlineHeart className="w-4 h-4 text-gray-500" />
            <AiOutlineBell className="w-4 h-4 text-gray-500" />
          </div>
          <div className="block md:hidden">
            <Link>
              <CiMenuKebab className="font-bold"></CiMenuKebab>
            </Link>
          </div>
        </div>
        <hr className="bg-gray-500" />
        <div
          className="chatWindow overflow-auto p-1"
          style={{ height: "70vh" }}
        >
          <div className="mt-3">
            <hr className="bg-gray-500" />
            <p className="text-gray-400 text-center text-xs">Tomorrow</p>
            <div className="flex space-x-1 mt-3 items-center">
              <img
                src="https://i.ibb.co/XF1BGvx/tamara-bellis-Brl7bqld05-E-unsplash.jpg"
                alt="profile"
                className="rounded-full w-5 h-5 object-cover"
              />
              <div className="px-2 py-2.5 bg-gray-200 rounded-md text-slate-700 text-base">
                Hi! How are you ?
              </div>
            </div>
            <div className="grid justify-self-end justify-end mt-3">
              <div className="flex space-x-1 w-72 items-center justify-end">
                <div className="px-2 py-2.5 bg-pink-600 rounded-md text-slate-100 text-base">
                  I am fine and you ?
                </div>
                <img
                  src="https://thumbs.dreamstime.com/b/profile-picture-smiling-caucasian-male-employee-close-up-young-businessman-show-leadership-qualities-headshot-portrait-happy-204044575.jpg"
                  alt="profile"
                  className="rounded-full w-5 h-5 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 py-2">
          <div className="relative flex items-center text-gray-500">
            <BsMic className="w-4 h-4 absolute ml-3" />
            <input
              type="text"
              placeholder="Write Something"
              className="rounded-2xl pl-10 py-1.5 w-full bg-gray-200"
            />
            <div className="flex space-x-2">
              <button>
                <FiPaperclip className="w-4 h-4 ml-2 mt-2" />
              </button>
              <button>
                <AiOutlineCamera className="w-4 h-4 ml-2 mt-2" />
              </button>
              <button>
                <BsEmojiSmile className="w-4 h-4 ml-2 mt-2" />
              </button>
              <button className="bg-pink-600 p-2 rounded-full mt-1">
                <AiOutlineSend className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
