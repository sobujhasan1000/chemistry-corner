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
import useSingleUser from "../../../Hooks/useSingleUser";
import style from "./ChatArea.css";

const ChatArea = ({ chat, setSendMessage, receiveMessage }) => {
  const { user } = useContext(AuthContext);
  const [singleUser] = useSingleUser(user.email);
  const [userData, setUserData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll = useRef();
  // console.log(messages);
  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat?._id) {
      setMessages([...messages, receiveMessage]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receiveMessage]);
  // console.log(userData);
  const userId = chat?.members?.find((id) => id !== singleUser._id);
  // console.log(userId);
  useEffect(() => {
    const getMember = async () => {
      try {
        await fetchMemberById(userId).then((data) => setUserData(data));
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null && (userId !== null || undefined)) {
      getMember();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat, userId]);

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
      senderId: singleUser._id,
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
    const receiverId = chat?.members?.find((id) => id !== singleUser._id);
    setSendMessage({ ...message, receiverId });
  };

  // always scroll to last message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div>
      <div className="px-4 pt-4 border-2 rounded overflow-hidden">
        {chat ? (
          <>
            {" "}
            <div className="flex justify-between items-center mb-2">
              <div className="flex space-x-3">
                <img
                  src={userData?.image}
                  alt="profile"
                  className="rounded-full w-10 h-9 object-cover"
                />
                <div className="text-lg text-slate-700 font-sans mt-2 flex space-x-2">
                  <p className="capitalize">{userData?.name}</p>
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
              style={{ height: "60vh" }}
            >
              <div className="mt-3">
                <div className="grid justify-self-end">
                  {messages?.map((message) => (
                    <div
                      key={message._id}
                      className={`${
                        message.senderId === singleUser._id
                          ? "ms-auto justify-end flex-row-reverse items-end"
                          : "items-start"
                      } flex gap-1 space-x-1 mt-2`}
                    >
                      <img
                        src={
                          message.senderId === singleUser._id
                            ? user?.photoURL
                            : userData?.image
                        }
                        alt="profile"
                        className="rounded-full w-5 h-5 object-center"
                      />
                      <div
                        ref={scroll}
                        className={`flex flex-col justify-start text-base px-2 rounded-tr-xl rounded-bl-xl py-2.5 ${
                          message.senderId === singleUser._id
                            ? "bg-pink-600 text-slate-100 rounded-tl-xl"
                            : "bg-pink-600 text-white rounded-br-xl"
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
            <div className="mt-3 py-2 w-full">
              <div className="relative flex text-gray-500">
                {/* <input
              type="text"
              placeholder="Write Something"
              className="rounded-2xl pl-10 py-1.5 w-full bg-gray-200"
            /> */}
                <div className="flex items-center justify-between space-x-2">
                  {/* <BsMic className="h-[32px] w-[32px] " /> */}
                  {/* <button>
                <FiPaperclip className="w-4 h-4 ml-2 mt-2" />
              </button>
              <button>
                <AiOutlineCamera className="w-4 h-4 ml-2 mt-2" />
              </button> */}
                  <button className="w-64 md:w-96">
                    <InputEmoji
                      value={newMessage}
                      onChange={handleChange}
                      cleanOnEnter
                      className="rounded-2xl pl-10 py-1.5 md:w-96 bg-gray-200"
                      placeholder="Type a message"
                    />
                  </button>
                  {/* <button>
                <BsEmojiSmile className="w-4 h-4 ml-2 mt-2" />
              </button> */}
                  <button
                    onClick={handleSend}
                    className="bg-pink-600 h-[40px] w-[40px] p-2 rounded-full"
                  >
                    <AiOutlineSend className="w-6 h-6 rounded-full text-white" />
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
