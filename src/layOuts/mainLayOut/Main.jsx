import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <Navbar id="navbar"></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
