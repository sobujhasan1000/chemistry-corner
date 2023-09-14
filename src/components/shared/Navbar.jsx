import { NavLink } from "react-router-dom";
import logo from "/ccLogo.png";
import {
  AiFillBell,
  AiOutlineMenu,
  // AiFillBell
} from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import userImage from "/user.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import useSingleUser from "../../Hooks/useSingleUser";
import Notification from "../../pages/Notification/Notification";
const Navbar = () => {
  const { user, setLoading, logOut, checkOnlineStatus } =
    useContext(AuthContext);
  const [singleUser] = useSingleUser(user?.email);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const userMenuRef = useRef(null);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful");
        setLoading(false);
        setIsUserMenuOpen(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeNavLink" : "navClasses"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/members"
          className={({ isActive }) =>
            isActive ? "activeNavLink" : "navClasses"
          }
        >
          Members
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/countries"
          className={({ isActive }) =>
            isActive ? "activeNavLink" : "navClasses"
          }
        >
          Countries
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "activeNavLink" : "navClasses"
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "activeNavLink" : "navClasses"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? "activeNavLink" : "navClasses"
          }
        >
          Contact Us
        </NavLink>
      </li>
      {user ? (
        <div className="dropdown dropdown-bottom dropdown-end z-50">
          <label
            tabIndex={0}
            className="p-0 btn bg-transparent text-white border-none hover:bg-transparent"
          >
            <AiFillBell className="w-7 h-7" />
          </label>
          <div
            tabIndex={0}
            className="dropdown-content bg-pink-200 z-[1] card card-compact py-2 shadow"
          >
            <div className="card-body w-96 p-0 m-0">
              <Notification></Notification>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
  const userMenuItems = (
    <>
      <li className="user-menu-item">
        <NavLink
          to={
            singleUser?.role &&
            (singleUser.role === "admin" || singleUser.role === "super-admin")
              ? "/dashboard/admin-home"
              : "/dashboard/user-home"
          }
          className={({ isActive }) =>
            isActive ? "activeNavLink " : " navClasses"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="user-menu-item">
        <button onClick={handleLogOut}>Log Out</button>
      </li>
    </>
  );

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleOutsideClick = () => {
    setIsUserMenuOpen(false);
  };
  const handleUserImageClick = (event) => {
    event.stopPropagation(); // Prevent click event from propagating
    handleUserMenuToggle(); // Toggle the user menu
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target) &&
        !event.target.closest(".user-menu-item") // Add this condition to exclude menu items
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div onClick={handleOutsideClick}>
      <div className="bg-[#ED0058]">
        <div className="flex items-center justify-between container mx-auto">
          <div>
            <img src={logo} alt="Website Logo" className="w-32 md:w-64" />
          </div>

          <div className="flex items-center gap-3 mr-5">
            <div className="hidden md:block">
              <nav>
                <ul className="text-white text-xl flex items-center gap-5">
                  {navItems}
                </ul>
              </nav>
            </div>
            {isMenuOpen ? (
              <div>
                {user && (
                  <img
                    src={user.photoURL ? user.photoURL : userImage}
                    alt="User Image"
                    className="w-10 h-10 rounded-full"
                  />
                )}
              </div>
            ) : (
              <div>
                {user && (
                  <div
                    ref={userMenuRef}
                    className={`w-10 h-10 cursor-pointer rounded-full avatar ${
                      checkOnlineStatus ? "online" : ""
                    }`}
                    // className="w-10 h-10 cursor-pointer rounded-full"
                    onClick={handleUserImageClick}
                  >
                    <img
                      src={user.photoURL}
                      alt="User Image"
                      className="w-full h-full rounded-full ring ring-primary ring-offset-base-100"
                    />
                  </div>
                )}
              </div>
            )}

            {isUserMenuOpen ? (
              <div className="block md:hidden transform hover:rotate-180 duration-300">
                {isMenuOpen ? (
                  <HiOutlineXMark className="text-2xl text-white " />
                ) : (
                  <AiOutlineMenu className="text-2xl text-white" />
                )}
              </div>
            ) : (
              <div
                className="block md:hidden transform hover:rotate-180 duration-300"
                onClick={handleMenuToggle}
              >
                {isMenuOpen ? (
                  <HiOutlineXMark className="text-2xl text-white " />
                ) : (
                  <AiOutlineMenu className="text-2xl text-white" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {user && (
        <div
          className={` bg-[#ED0058] w-1/2 md:w-80 py-2 absolute duration-300 z-50 ${
            isUserMenuOpen
              ? "right-0 top-12 md:top-[6.2rem]"
              : "right-0 -top-80"
          }`}
        >
          <ul className="text-white text-lg flex flex-col items-start gap-2 ml-3">
            {userMenuItems}
          </ul>
        </div>
      )}
      <div
        className={` md:hidden bg-[#ED0058] w-1/2 h-fit py-2 text-white text-lg flex flex-col items-start gap-2 absolute duration-300 z-50 ${
          isMenuOpen ? "top-12 left-0" : "top-12 -left-96"
        }`}
      >
        <ul className=" text-white text-lg flex flex-col items-start gap-2 ml-3">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
