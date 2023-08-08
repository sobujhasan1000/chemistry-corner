import { NavLink } from "react-router-dom";
import logo from "../../../public/ccLogo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import userImage from "../../../public/user.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
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
        <button>LogOut</button>
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
      <div className="bg-[#ee596b]">
        <div className="flex items-center justify-between container mx-auto">
          <div>
            <img src={logo} alt="Website Logo" className="w-32 md:w-64" />
          </div>

          <div className="flex items-center gap-3 mr-5">
            <div className="hidden md:block">
              <nav>
                <ul className="text-black text-xl flex items-center gap-5">
                  {navItems}
                </ul>
              </nav>
            </div>
            <div onClick={handleUserMenuToggle}>
              <img
                src={userImage}
                alt="User Demo Image"
                className="w-10 cursor-pointer"
              />
            </div>
            <div
              className="block md:hidden transform hover:rotate-180 duration-300"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? (
                <HiOutlineXMark className="text-2xl text-black " />
              ) : (
                <AiOutlineMenu className="text-2xl text-black" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={` bg-[#ee596b] w-1/2 md:w-80 py-2 absolute duration-300 ${
          isUserMenuOpen ? "right-0 top-12 md:top-[6.2rem]" : "right-0 -top-80"
        }`}
      >
        <ul className="text-black text-lg flex flex-col items-start gap-2 ml-3">
          {userMenuItems}
        </ul>
      </div>
      <div
        className={` md:hidden bg-[#ee596b] w-1/2 py-2 text-black text-lg flex flex-col items-start gap-2 absolute duration-300 ${
          isMenuOpen ? "left-0" : "-left-64"
        }`}
      >
        <ul className=" text-black text-lg flex flex-col items-start gap-2 ml-3">
          {navItems}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
