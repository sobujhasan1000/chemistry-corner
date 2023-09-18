import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Conversation from "./Conversation";

const UserArea = ({ userChats, setCurrentChat, userId }) => {
  const { checkOnlineStatus } = useContext(AuthContext);
  return (
    <div>
      <div className="md:px-4 py-2 bg-gray-100 rounded">
        <div className="flex justify-evenly rounded-full object-cover md:block">
          {userChats &&
            userChats.slice(0, 3).map((user, i) => (
              <div
                key={user.name}
                onClick={() => setCurrentChat(user)}
                className="capitalize"
              >
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