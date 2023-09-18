import { useContext } from "react";
import useSingleUser from "../../../Hooks/useSingleUser";
import { AuthContext } from "../../../providers/AuthProvider";
import { BsPatchCheck } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Favorite from "./Favorite";
import Like from "./Like";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const [singleUser] = useSingleUser(user.email);
  return (
    <div className="bg-pink-100 p-6 rounded overflow-hidden">
      <div className="md:flex gap-5">
        <div className="md:w-2/3">
          <div>
            <div className="card lg:card-side bg-gray-100 shadow-xl md:h-64">
              <figure>
                <img
                  className="w-full h-full md:w-64 lg:w-96 md:h-64 lg:h-96 md:rounded-2xl"
                  src={singleUser.image}
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-black">
                  {singleUser.name}, {singleUser.age}
                  <span>
                    <BsPatchCheck className="text-green-500"></BsPatchCheck>
                  </span>
                </h2>
                <p className="flex items-center gap-2 uppercase text-[#ED0058]">
                  <GoLocation></GoLocation>
                  {singleUser.city}
                </p>
                <p className="text-black">{singleUser.bio}</p>
                <div className="flex flex-wrap text-center gap-3">
                  {singleUser.interests?.map((interest, i) => (
                    <p
                      key={i}
                      className="bg-[#f8a7c5] text-[#fc4c8c] px-2 py-1 rounded-xl"
                    >
                      {interest.label}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 shadow-xl my-6 px-4 md:py-2 rounded-xl">
            <h1 className="mx-3 text-3xl pt-4 font-bold">
              People who liked me
            </h1>
            <Like></Like>
          </div>
        </div>
        <div className="md:w-1/3">
          {/* <div className="bg-gray-100 shadow-xl md:py-2 rounded-xl">
            <h1 className="text-3xl font-bold">Message</h1>
            <UserArea></UserArea>
          </div> */}
          <div className="bg-gray-100 shadow-xl md:py-2 rounded-xl">
            <h1 className="mx-3 md:text-xl lg:text-lg pt-4 font-bold text-black">
              My Favorites Contacts
            </h1>
            <Favorite></Favorite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
