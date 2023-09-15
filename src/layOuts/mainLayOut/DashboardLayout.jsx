import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative flex min-h-screen">
      {/* Hamburger Menu */}
      <div className="lg:hidden absolute top-0 left-0 z-50">
        <button onClick={toggleSidebar} className="bg-[#ED0058] text-white p-2">
          {!sidebarOpen && <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          // Apply sticky styles only for lg and larger screens
          "lg:sticky lg:top-0 lg:h-screen lg:w-1/5"
        } fixed left-0 transform transition-transform z-30 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block lg:relative lg:w-1/5 bg-[#ED0058] text-white`}
      >
        {/* Close Button for Mobile */}
        <div className="lg:hidden absolute top-0 right-0 p-4">
          <button onClick={toggleSidebar} className="text-white">
            <FaTimes />
          </button>
        </div>

        <div className="p-6 mt-3">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        {/* Sidebar content goes here */}
        <Sidebar toggleSidebar={toggleSidebar} />
      </aside>

      {/* Main Content */}
      <main className="lg:w-4/5 flex-grow p-4 lg:p-8 overflow-x-auto">
        {/* Main content goes here */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
