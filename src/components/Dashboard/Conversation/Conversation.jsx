import { Link } from "react-router-dom";
// import useSingleMember from "../../../Hooks/useSingleMember";
import { useEffect, useState } from "react";
import { fetchMemberById } from "../../../api/fetch";

const Conversation = ({ user, currentUserId, online }) => {
  const [userData, setUserData] = useState([]);
  console.log(user);
  const userId = user?.members?.find((id) => id !== currentUserId);
  console.log(userId);
  useEffect(() => {
    if (user !== null && (userId !== null || undefined)) {
      try {
        fetchMemberById(userId).then((data) => setUserData(data));
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, currentUserId]);

  return (
    <Link className="flex space-x-3 my-4">
      <div className={online ? "avatar online" : "avatar"}>
        <div className="w-16 rounded-full">
          <img src={userData?.image} />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="">
          <h1 className="text-pink-600 text-sm font-bold">{userData?.name}</h1>
        </div>
        <div>
          <p className="text-gray-500 mt-0.5" style={{ fontSize: "10px" }}>
            {userData?.time}
          </p>
          <p
            className={`text-white ${
              userData.status === "1" ? "bg-pink-700" : "bg-gray-100"
            } rounded-full w-4 text-center float-right mt-1`}
            style={{ fontSize: "10px" }}
          >
            {userData.status}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Conversation;
