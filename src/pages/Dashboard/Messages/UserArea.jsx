import { FiSearch } from "react-icons/fi";
import Conversation from "../../../components/Dashboard/Conversation/Conversation";

const UserArea = ({ userChats, setCurrentChat, userId, checkOnlineStatus }) => {
  return (
    <div>
      <div className="p-4 bg-gray-100" style={{ height: "100vh" }}>
        <div className="my-4 py-2">
          <div className="relative flex items-center text-gray-400">
            <FiSearch className="w-5 h-5 absolute ml-3" size="0.8rem" />
            <input
              type="text"
              placeholder={`Search Friends`}
              className="rounded-2xl pl-10 py-1.5 w-full"
            />
          </div>
        </div>
        {userChats &&
          userChats.map((user, i) => (
            <div key={user.name} onClick={() => setCurrentChat(user)}>
              <Conversation
                key={i}
                user={user}
                currentUserId={userId}
                online={checkOnlineStatus(user)}
              ></Conversation>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserArea;
