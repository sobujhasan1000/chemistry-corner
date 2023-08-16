import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import useSingleUser from "../Hooks/useSingleUser";
import siteLoader from "/ccLoader.gif";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [singleUser, loading] = useSingleUser(user?.email);

  const {
    image,
    name,
    gender,
    email,
    city,
    address,
    age,
    bio,
    contact,
    country,
    maritalStatus,
    height,
    weight,
    education,
    dob,
  } = singleUser;

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img src={siteLoader} alt="Website Loader" />
      </div>
    );
  }

  const isProfileIncomplete =
    !image ||
    !name ||
    !gender ||
    !email ||
    !education ||
    !age ||
    !dob ||
    !country ||
    !maritalStatus;

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
          <div className="bg-gray-100 md:w-3/12 p-4">
            <div className="bg-white p-3 border-t-4 border-green-400 rounded shadow-sm">
              <div className="overflow-hidden">
                <img className="h-auto w-full mx-auto" src={image} alt="" />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {name}
              </h1>
              <h1 className="text-gray-900 leading-8 text-base my-1">Bio</h1>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {bio}
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

          <div className="md:w-9/12 md:p-4 relative">
            <div className="bg-white p-3 shadow-sm rounded-sm w-full">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <FaUser />
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Name</div>
                    <div className="px-4 py-2">{name}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2 capitalize">{gender}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">{contact}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Age</div>
                    <div className="px-4 py-2">{age} years</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Height (cm)</div>
                    <div className="px-4 py-2">{height} cm</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Weight (kg)</div>
                    <div className="px-4 py-2">{weight} kg</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Address</div>
                    <div className="px-4 py-2">{address}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">City</div>
                    <div className="px-4 py-2 capitalize">{city}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Country</div>
                    <div className="px-4 py-2 capitalize">{country}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                      <a className="text-blue-800" href={`mailto:${email}`}>
                        {email}
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Education</div>
                    <div className="px-4 py-2">{education}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Date of Birth</div>
                    <div className="px-4 py-2">{dob}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Marital Status
                    </div>
                    <div className="px-4 py-2 capitalize">{maritalStatus}</div>
                  </div>
                </div>
              </div>
              <Link to="/update-profile">
                <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                  Edit Profile
                </button>
              </Link>
            </div>
            {isProfileIncomplete && (
              <div className=" invisible bg-white absolute inset-0 my-4 w-full h-96 flex flex-col items-center justify-center gap-5 bg-opacity-90 backdrop-blur-sm">
                <h1 className="text-black text-xl font-semibold text-center md:text-left">
                  Please Edit your profile to see your details.
                </h1>
                <Link to="/update-profile">
                  <button className="bg-[#ee236e] text-white px-5 py-2">
                    Edit Profile
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
