import { FiSearch } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const PartnerProfile = () => {
  return (
    <div className="hidden md:block">
      <div className="p-4 bg-gray-100 h-screen">
        <div className="my-2 py-2">
          <div className="relative flex items-center text-gray-400">
            <FiSearch className="w-5 h-5 absolute ml-3" size="0.8rem" />
            <input
              type="text"
              placeholder={`Search People`}
              className="rounded-2xl pl-10 py-1.5 w-full"
            />
          </div>
        </div>

        <div className="grid place-items-center my-3">
          <img
            src={`https://i.ibb.co/XF1BGvx/tamara-bellis-Brl7bqld05-E-unsplash.jpg`}
            alt="profile"
            className="rounded-full w-28 h-28 object-cover"
          />
          <h1 className="text-2xl mt-1">Joanna Gonzalez</h1>
          <p className="text-lg text-gray-700">Junior Developer</p>
        </div>

        <div>
          <h1 className="my-3 text-sm text-gray-700 font-bold">Calls</h1>
          <div className="flex justify-between mx-10 my-4">
            <div>
              <Link>
                <div className="bg-pink-200 p-3 rounded-full">
                  <IoIosCall color="#f7284c" size="1.5rem" />
                </div>
              </Link>
              <p className="text-gray-700 text-center text-sm mt-1">Audio</p>
            </div>
            <div className="w-0.5 bg-gray-300"></div>
            <div>
              <Link>
                <div className="bg-pink-200 p-3 rounded-full">
                  <BsFillCameraVideoFill color="#f7284c" size="1.5rem" />
                </div>
              </Link>
              <p className="text-gray-700 text-center text-sm mt-1">Video</p>
            </div>
          </div>
        </div>

        <div className="my-3">
          <div className="flex space-x-3">
            <AiOutlineUser className="mt-1" size="1rem" color="grey" />
            <Link className="text-gray-700 text-sm hover:underline">View Profile</Link>
          </div>
          <div className="flex space-x-3 my-3">
            <AiOutlineHeart className="mt-1" size="1rem" color="grey" />
            <p className="text-gray-700 text-sm ">Add to Favorites</p>
          </div>
        </div>

        <div>
          <h1 className="my-3 text-sm text-gray-700 font-bold">Attachments</h1>
          <div className="flex justify-between">
            <div className="bg-pink-200 rounded-md w-14 h-16 grid place-content-center">
              <h1 className="text-pink-400 text-xs font-bold">File</h1>
            </div>
            <div className="bg-pink-200 rounded-md w-14 h-16 grid place-content-center">
              <h1 className="text-pink-400 text-xs font-bold">File</h1>
            </div>
            <div className="bg-pink-200 rounded-md w-14 h-16 grid place-content-center">
              <h1 className="text-pink-400 text-xs font-bold">File</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;
