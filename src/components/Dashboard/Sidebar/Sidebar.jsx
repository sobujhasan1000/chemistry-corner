import {
  FaHome,
  FaPowerOff,
  FaRegStar,
  FaSearch,
  FaBlog,
} from "react-icons/fa";
import { BsPen, BsQuestionCircle } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarUserItems = [
    { label: "Profile", icon: CgProfile, path: "/dashboard/profile" },
    { label: "Search", icon: FaSearch, path: "/dashboard/search" },
    { label: "Messages", icon: BiMessageRounded, path: "/dashboard/messages" },
    { label: "Likes", icon: AiOutlineHeart, path: "/dashboard/likes" },
    { label: "Favorites", icon: FaRegStar, path: "/dashboard/favorite" },
    {
      label: "Users Feedbacks",
      icon: BsPen,
      path: "/dashboard/users-feedbacks",
    },
    {
      label: "Give a Feedback",
      icon: BsPen,
      path: "/dashboard/give-a-feedback",
    },
    {
      label: "Users Inquiries",
      icon: BsQuestionCircle,
      path: "/dashboard/users-inquiries",
    },
    { label: "Create a Blog", icon: FaBlog, path: "/dashboard/create-blog" },
    { label: "Log out", icon: FaPowerOff, path: "/dashboard/logout" },
  ];
  const sidebarCommonItems = [{ label: "Home", icon: FaHome, path: "/" }];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col justify-center items-start gap-2">
        {sidebarUserItems.map(({ icon: Icon, label, path }, i) => (
          <Link
            to={path}
            key={i}
            className="flex justify-center items-center gap-1 px-3 py-1 ml-8 hover:bg-[#ff5492]"
          >
            <Icon size={30} />
            <h4 className="text-xl">{label}</h4>
          </Link>
        ))}
      </div>
      <hr />
      <div className="flex flex-col justify-center items-start gap-2">
        {sidebarCommonItems.map(({ icon: Icon, label, path }, i) => (
          <Link
            to={path}
            key={i}
            className="flex justify-center items-center gap-1 px-3 py-1 ml-8 hover:bg-[#ff5492]"
          >
            <Icon size={30} />
            <h4 className="text-xl">{label}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
