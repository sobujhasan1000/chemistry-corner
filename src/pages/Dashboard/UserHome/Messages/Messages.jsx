import { useContext, useEffect, useRef, useState } from "react";
// import PartnerProfile from "./PartnerProfile";
import UserArea from "./UserArea";
import { AuthContext } from "../../../../providers/AuthProvider";
import { io } from "socket.io-client";
import useSingleUser from "../../../../Hooks/useSingleUser";
import { Link } from "react-router-dom";

const Messages = () => {
  const { user } = useContext(AuthContext);
  const [singleUser] = useSingleUser(user.email);
  const [userChats, setUserChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  // const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const socket = useRef();

  // sending message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    socket.current = io(`${import.meta.env.VITE_SOCKET_URL}`);
    socket.current.emit("new-user-add", singleUser._id);
    socket.current.on("get-users", () => {
      // setOnlineUsers(users);
    });
  }, [singleUser]);

  // receive message from socket server
  useEffect(() => {
    console.log("socket curr", socket);
    socket.current.on("receive-message", (data) => {
      console.log("Data received in parent div", data);
      setReceiveMessage(data);
    });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/chat/${singleUser._id}`)
      .then((res) => res.json())
      .then((data) => setUserChats(data));
  }, [singleUser]);

  return (
    <div className="md:flex overflow-hidden gap-3 p-4">
      <div>
        <UserArea
          userChats={userChats}
          setCurrentChat={setCurrentChat}
          userId={singleUser._id}
          // checkOnlineStatus={checkOnlineStatus}
        ></UserArea>
        <div className="mt-2">
          
        <Link to="/dashboard/messages">
          <button className="bg-[#ED0058] px-10 py-2 text-white border border-[#ED0058] hover:bg-white hover:text-[#ED0058] transition-all ease-in duration-300">
            View More
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Messages;
