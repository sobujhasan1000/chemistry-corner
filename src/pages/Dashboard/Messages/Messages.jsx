import ChatArea from "./ChatArea";
import PartnerProfile from "./PartnerProfile";
import UserArea from "./UserArea";

const Messages = () => {
  return (
    <div className="md:flex">
      <div className="md:w-1/4">
        <UserArea></UserArea>
      </div>
      <div className="md:w-2/4">
        <ChatArea></ChatArea>
      </div>
      <div className="md:flex gap-2">
        <PartnerProfile className="md:w-1/4"></PartnerProfile>
      </div>
    </div>
  );
};

export default Messages;
