import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
          <div className="bg-gray-100 md:w-3/12 p-4">
            <div className="bg-white p-3 border-t-4 border-green-400 rounded shadow-sm">
              <div className="overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src={user.photoURL}
                  alt=""
                />
                <div className="my-3">
                  <label htmlFor="photoURL" className="text-black">
                    Upload Photo
                  </label>
                  <input type="file" name="photoURL" className="mt-1" />
                </div>
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {user.displayName}
              </h1>
              <h1 className="text-gray-900 leading-8 text-base my-1">Bio</h1>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-9/12 p-4 ">
            <div className="bg-white p-3 shadow-sm rounded-sm w-full">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <FaUser />
                <span className="tracking-wide">Update Profile</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm gap-2">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Name</div>
                    <input
                      type="text"
                      name="name"
                      className="px-3 py-1 bg-white border border-[#ee236e]"
                    />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <select
                      name="gender"
                      className="px-3 py-1 bg-white border border-[#ee236e]"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-Binary</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <input
                      type="text"
                      name="contact"
                      className="px-3 py-1 bg-white border border-[#ee236e]"
                    />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Current Address
                    </div>
                    <input
                      type="text"
                      className="px-3 py-1 bg-white border border-[#ee236e]"
                    />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Permanent Address
                    </div>
                    <input
                      type="text"
                      className="px-3 py-1 bg-white border border-[#ee236e]"
                    />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <input
                      type="text"
                      className="px-3 py-1 bg-white border border-[#ee236e]"
                    />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    <input
                      type="text"
                      className="px-3 py-1 bg-white border border-[#ee236e]"
                    />
                  </div>
                </div>
              </div>
              <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
