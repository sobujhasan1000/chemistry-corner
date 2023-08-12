import { NavLink } from "react-router-dom";
import logo from "/ccLogo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import userImage from "/user.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, loading, setLoading, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

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

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  const userMenuItems = (
    <>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
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
  return (
    <>
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
                <img src={userImage} alt="User Demo Image" className="w-10" />
              </div>
            ) : (
              <div onClick={handleUserMenuToggle}>
                <img
                  src={userImage}
                  alt="User Demo Image"
                  className="w-10 cursor-pointer"
                />
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
      <div
        className={` bg-[#ED0058] w-1/2 md:w-80 py-2 absolute duration-300 z-50 ${
          isUserMenuOpen ? "right-0 top-12 md:top-[6.2rem]" : "right-0 -top-80"
        }`}
      >
        <ul className="text-white text-lg flex flex-col items-start gap-2 ml-3">
          {userMenuItems}
        </ul>
      </div>
      <div
        className={` md:hidden bg-[#ED0058] w-1/2 h-fit py-2 text-white text-lg flex flex-col items-start gap-2 absolute duration-300 z-50 ${
          isMenuOpen ? "top-12 left-0" : "top-12 -left-96"
        }`}
      >
        <ul className=" text-white text-lg flex flex-col items-start gap-2 ml-3">
          {navItems}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
