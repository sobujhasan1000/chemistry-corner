import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
// import { FiPaperclip } from "react-icons/fi";
// import { AiOutlineCamera } from "react-icons/ai";
// import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { addMessage, fetchMemberById, getMessages } from "../../../api/fetch";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import { AuthContext } from "../../../providers/AuthProvider";
import { useRef } from "react";

const ChatArea = ({ chat, currentUser, setSendMessage, receiveMessage }) => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll = useRef();
  console.log(currentUser);
  // console.log(messages);
  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
      setMessages([...messages, receiveMessage]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receiveMessage]);

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        await fetchMemberById(userId).then((data) => setUserData(data));
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat, currentUser]);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        await getMessages(chat._id).then((data) => setMessages(data));
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) fetchMessages();
  }, [chat]);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    };
    // send message to database
    try {
      addMessage(message).then((data) => {
        setMessages([...messages, data]);
        setNewMessage("");
      });
    } catch (error) {
      console.log(error);
    }

    //send message to socket server
    const receiverId = chat?.members?.find((id) => id !== currentUser);
    setSendMessage({ ...message, receiverId });
  };

  // always scroll to last message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div>
      <div className="p-4 h-screen">
        {chat ? (
          <>
            {" "}
            <div className="flex justify-between mb-3">
              <div className="flex space-x-3">
                <img
                  src={userData.image}
                  alt="profile"
                  className="rounded-full w-10 h-9 object-cover"
                />
                <div className="text-lg text-slate-700 font-sans mt-2 flex space-x-2">
                  <p>{userData?.name}</p>
                </div>
              </div>
              <div className="flex space-x-2 mt-3">
                <FiSearch className="w-4 h-4 text-gray-500" />
                <AiOutlineHeart className="w-4 h-4 text-gray-500" />
                <AiOutlineBell className="w-4 h-4 text-gray-500" />
              </div>
            </div>
            <hr className="bg-gray-500" />
            <div
              className="chatWindow overflow-auto p-1"
              style={{ height: "70vh" }}
            >
              <div className="mt-3">
                <hr className="bg-gray-500" />
                <div className="grid justify-self-end">
                  {messages?.map((message) => (
                    <div
                      key={message._id}
                      className={`${
                        message.senderId === currentUser
                          ? "ms-auto justify-end flex-row-reverse items-end"
                          : "items-start"
                      } flex gap-1 space-x-1 mt-3`}
                    >
                      <img
                        src={
                          message.senderId === currentUser
                            ? user?.photoURL
                            : userData?.image
                        }
                        alt="profile"
                        className="rounded-full w-5 h-5 object-cover"
                      />
                      <div
                        ref={scroll}
                        className={`flex flex-col justify-start text-base px-2 rounded-tr-xl rounded-bl-xl py-2.5 ${
                          message.senderId === currentUser
                            ? "bg-pink-600 text-slate-100 rounded-tl-xl"
                            : "bg-gray-200 text-slate-700 rounded-br-xl"
                        } `}
                      >
                        <span>{message.text}</span>{" "}
                        <span className="text-xs">
                          {format(message.createdAt)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="my-4 py-2">
              <div className="relative flex items-center text-gray-500">
                <BsMic className="w-4 h-4 absolute ml-3" />
                {/* <input
              type="text"
              placeholder="Write Something"
              className="rounded-2xl pl-10 py-1.5 w-full bg-gray-200"
            /> */}
                <div className="flex space-x-2">
                  {/* <button>
                <FiPaperclip className="w-4 h-4 ml-2 mt-2" />
              </button>
              <button>
                <AiOutlineCamera className="w-4 h-4 ml-2 mt-2" />
              </button> */}
                  <button className="w-60">
                    <InputEmoji
                      value={newMessage}
                      onChange={handleChange}
                      cleanOnEnter
                      placeholder="Type a message"
                    />
                  </button>
                  {/* <button>
                <BsEmojiSmile className="w-4 h-4 ml-2 mt-2" />
              </button> */}
                  <button
                    onClick={handleSend}
                    className="bg-pink-600 p-2 rounded-full mt-1"
                  >
                    <AiOutlineSend className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <span className="text-center">
            Tap on a Chat to start Conversation...
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatArea;
