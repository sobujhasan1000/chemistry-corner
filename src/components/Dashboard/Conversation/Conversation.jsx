import { Link } from "react-router-dom";
import useSingleMember from "../../../Hooks/useSingleMember";

const Conversation = ({ user, currentUserId, online }) => {
  console.log(user);
  const userId = user.members.find((id) => id !== currentUserId);
  console.log(userId);
  const [singleMember] = useSingleMember(userId);
  console.log(singleMember);

  return (
    <Link className="flex space-x-3 my-4">
      <div className={online ? "avatar online" : "avatar"}>
        <div className="w-16 rounded-full">
          <img src={singleMember?.image} />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="">
          <h1 className="text-pink-600 text-sm font-bold">
            {singleMember.name}
          </h1>
        </div>
        <div>
          <p className="text-gray-500 mt-0.5" style={{ fontSize: "10px" }}>
            {singleMember.time}
          </p>
          <p
            className={`text-white ${
              singleMember.status === "1" ? "bg-pink-700" : "bg-gray-100"
            } rounded-full w-4 text-center float-right mt-1`}
            style={{ fontSize: "10px" }}
          >
            {singleMember.status}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Conversation;
