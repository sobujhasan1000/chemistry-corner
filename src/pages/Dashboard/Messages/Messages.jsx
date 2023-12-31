import { useContext, useEffect, useRef, useState } from "react";
import ChatArea from "./ChatArea";
// import PartnerProfile from "./PartnerProfile";
import UserArea from "./UserArea";
import { AuthContext } from "../../../providers/AuthProvider";
import useSingleUser from "../../../Hooks/useSingleUser";
import { io } from "socket.io-client";

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
    <div className="md:flex overflow-hidden gap-3 bg-pink-200 p-4">
      <div className="md:w-1/3">
        <UserArea
          userChats={userChats}
          setCurrentChat={setCurrentChat}
          userId={singleUser._id}
          // checkOnlineStatus={checkOnlineStatus}
        ></UserArea>
      </div>
      <div className="md:w-2/3">
        <ChatArea
          chat={currentChat}
          setSendMessage={setSendMessage}
          receiveMessage={receiveMessage}
        ></ChatArea>
      </div>
      {/* <div className="md:flex gap-2">
        <PartnerProfile className="md:w-1/4"></PartnerProfile>
      </div> */}
    </div>
  );
};

export default Messages;
