import { FiSearch } from "react-icons/fi";
import Conversation from "../../../components/Dashboard/Conversation/Conversation";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UserArea = ({ userChats, setCurrentChat, userId }) => {
  const { checkOnlineStatus } = useContext(AuthContext);
  return (
    <div>
      <div className="md:px-4 py-2 bg-gray-100 rounded">
        <div className="md:my-4 md:py-2">
          <div className="relative flex items-center text-gray-400">
            <FiSearch className="w-5 h-5 absolute ml-3" size="0.8rem" />
            <input
              type="text"
              placeholder={`Search Friends`}
              className="rounded-2xl pl-10 py-1.5 w-full"
            />
          </div>
        </div>
        
        <div className="flex justify-evenly rounded-full object-cover md:block">
        {userChats &&
          userChats.map((user, i) => (
            <div key={user.name} onClick={() => setCurrentChat(user)} className="capitalize hover:bg-pink-200 p-[1px] rounded-md pl-2">
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
    </div>
  );
};

export default UserArea;
