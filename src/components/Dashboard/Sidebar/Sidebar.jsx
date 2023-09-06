import {
  FaHome,
  FaPowerOff,
  FaRegStar,
  FaSearch,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { VscFeedback } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineManageAccounts, MdOutlineFeedback } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useSingleUser from "../../../Hooks/useSingleUser";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [singleUser] = useSingleUser(user.email);
  let sidebarUserItems = [
    { label: "Profile", icon: CgProfile, path: "/dashboard/profile" },
    { label: "Search", icon: FaSearch, path: "/dashboard/search" },
    { label: "Messages", icon: BiMessageRounded, path: "/dashboard/messages" },
    { label: "Likes", icon: AiOutlineHeart, path: "/dashboard/likes" },
    { label: "Favorites", icon: FaRegStar, path: "/dashboard/favorite" },
    {
      label: "Give Feedback",
      icon: VscFeedback,
      path: "/dashboard/give-a-feedback",
    },
    { label: "Create a Blog", icon: TfiWrite, path: "/dashboard/create-blog" },
  ];
  if (singleUser.role && singleUser.role === ("admin" || "super-admin")) {
    sidebarUserItems = [
      { label: "Admin", icon: FaPowerOff, path: "/dashboard/admin-home" },
      {
        label: "Manage Users",
        icon: MdOutlineManageAccounts,
        path: "/dashboard/manage-users",
      },
      {
        label: "Payment History",
        icon: FaFileInvoiceDollar,
        path: "/dashboard/payment",
      },
      {
        label: "Users Feedback",
        icon: MdOutlineFeedback,
        path: "/dashboard/users-feedbacks",
      },
      {
        label: "Users Inquiries",
        icon: BsQuestionCircle,
        path: "/dashboard/users-inquiries",
      },
    ];
  }

  const sidebarCommonItems = [
    { label: "Home", icon: FaHome, path: "/" },
    { label: "Log out", icon: FaPowerOff, path: "/dashboard/logout" },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col justify-center items-start gap-3">
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
