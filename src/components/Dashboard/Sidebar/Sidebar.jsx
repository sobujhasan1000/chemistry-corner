import {
  FaHome,
  FaPowerOff,
  FaRegStar,
  // FaSearch,
  FaFileInvoiceDollar,
  FaRegUser,
} from "react-icons/fa";
import { BsQuestionCircle, BsPersonGear } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { VscFeedback } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { BiHomeHeart, BiMessageRounded } from "react-icons/bi";
import { AiFillBell, AiOutlineHeart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineManageAccounts, MdOutlineFeedback } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useSingleUser from "../../../Hooks/useSingleUser";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { getSinglePayment } from "../../../api/fetch";

const Sidebar = ({ toggleSidebar }) => {
  const { user, setLoading, logOut } = useContext(AuthContext);
  const [singleUser, loading] = useSingleUser(user.email);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };
  let sidebarUserItems = [
    { label: "Home", icon: BiHomeHeart, path: "/dashboard/user-home" },
    { label: "Profile", icon: CgProfile, path: "/dashboard/profile" },
    { label: "Settings", icon: BsPersonGear, path: "/dashboard/settings" },
    // { label: "Search", icon: FaSearch, path: "/dashboard/search" },
    { label: "Messages", icon: BiMessageRounded, path: "/dashboard/messages" },
    {
      label: "Notifications",
      icon: AiFillBell,
      path: "/dashboard/notifications",
    },
    { label: "Likes", icon: AiOutlineHeart, path: "/dashboard/likes" },
    { label: "Favorites", icon: FaRegStar, path: "/dashboard/favorite" },
    {
      label: "Give Feedback",
      icon: VscFeedback,
      path: "/dashboard/give-a-feedback",
    },
    { label: "Create a Blog", icon: TfiWrite, path: "/dashboard/create-blog" },
  ];
  if (
    (!loading && singleUser.role && singleUser.role === "super-admin") ||
    singleUser.role === "admin"
  ) {
    sidebarUserItems = [
      { label: "Profile", icon: CgProfile, path: "/dashboard/profile" },
      { label: "Admin", icon: FaRegUser, path: "/dashboard/admin-home" },
      {
        label: "Messages",
        icon: BiMessageRounded,
        path: "/dashboard/messages",
      },
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
    { label: "Log out", icon: FaPowerOff, onClick: handleLogOut },
  ];

  const { data: payment = {} } = useQuery({
    queryKey: ["order", user?.email],
    queryFn: async () => {
      const data = await getSinglePayment(user?.email);
      return data;
    },
  });
  console.log(payment);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col justify-center items-start gap-3">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <div className="relative">
            <img
              src={singleUser.image}
              alt="User Image"
              className="rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2"
            />
            {payment && payment?.package && (
              <div className="badge badge-warning text-white absolute bottom-1 left-14 px-3 py-2">
                {payment.package === "7 Days Free Trial"
                  ? "Free"
                  : payment?.package}
              </div>
            )}
          </div>

          <h1 className="capitalize text-xl">{singleUser.name}</h1>
        </div>
        {sidebarUserItems.map(({ icon: Icon, label, path }, i) => (
          <NavLink
            to={path}
            key={i}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive
                ? "activeNavLink flex justify-center items-center gap-1 px-3 py-0.5 ml-8"
                : "navClasses flex justify-center items-center gap-1 px-3 py-0.5 ml-8"
            }
          >
            <Icon size={30} />
            <h4 className="text-xl">{label}</h4>
          </NavLink>
        ))}
      </div>
      <hr />
      <div className="flex flex-col justify-center items-start gap-2">
        {sidebarCommonItems.map(({ icon: Icon, label, path, onClick }, i) => (
          <Link
            onClick={() => {
              onClick();
              toggleSidebar(); // Close sidebar on click
            }}
            to={path}
            key={i}
            className="flex justify-center items-center gap-1 px-3 py-1 ml-8 hover:bg-[#ff5492] hover:underline hover:underline-offset-4"
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
