import user1 from "/user1.jpg";
import user2 from "/user2.jpg";
import user3 from "/user3.jpg";

import { useContext } from "react";
import useSingleUser from "../../../Hooks/useSingleUser";
import { AuthContext } from "../../../providers/AuthProvider";
import { BsPatchCheck } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const [singleUser] = useSingleUser(user.email);
  return (
    <div className="bg-pink-100 p-6 rounded">
      <div>
        <div className="card lg:card-side bg-gray-100 shadow-xl">
          <figure>
            <img
              className="w-1/2 md:h-60 md:w-56"
              src={singleUser.image}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {singleUser.name}, {singleUser.age}
              <span>
                <BsPatchCheck className="text-green-500"></BsPatchCheck>
              </span>
            </h2>
            <p className="flex items-center gap-2 uppercase text-gray-400">
              <GoLocation></GoLocation>
              {singleUser.city}
            </p>
            <p>{singleUser.bio}</p>
            <div className="flex flex-wrap text-center gap-3">
              <p className="bg-[#f8a7c5] text-[#fc4c8c] px-2 py-1 rounded-xl">
                Fashion
              </p>{" "}
              <p className="bg-[#f8a7c5] text-[#fc4c8c] px-2 py-1 rounded-xl">
                Traveling
              </p>
              <p className="bg-[#f8a7c5] text-[#fc4c8c] px-2 py-1 rounded-xl">
                Nature
              </p>
              <p className="bg-[#f8a7c5] text-[#fc4c8c] px-2 py-1 rounded-xl">
                Art
              </p>
              <p className="bg-[#f8a7c5] text-[#fc4c8c] px-2 py-1 rounded-xl">
                Anime
              </p>
              <p className="bg-[#f8a7c5] text-[#fc4c8c] px-2 py-1 rounded-xl">
                Movie
              </p>
              <p className="bg-[#f8a7c5] text-[#fc4c8c] px-2 py-1 rounded-xl">
                Music
              </p>
              <p className="bg-[#f8a7c5] text-[#fc4c8c] px-2 py-1 rounded-xl">
                Sports
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 shadow-xl my-6 px-4 md:py-2 rounded-xl">
      <h1 className="text-3xl font-bold">Photos</h1>
      <div className="flex flex-col md:flex-row items-center py-2 gap-4 mt-5">
                  <img src={user1} alt="" className="w-56 h-40 rounded-xl" />
                  <img src={user2} alt="" className="w-56 h-40 rounded-xl" />
                  <img src={user3} alt="" className="w-56 h-40 rounded-xl" />
                </div>
      </div>
      <div className="bg-gray-100 shadow-xl my-6 px-4 md:py-2 rounded-xl">
      <h1 className="text-3xl font-bold">About</h1>
      </div>
    </div>
  );
};

export default UserHome;
