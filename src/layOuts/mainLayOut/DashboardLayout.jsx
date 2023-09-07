import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderDashboardHeading = location.pathname === "/dashboard" && (
    <h2 className="text-2xl font-semibold mb-4 text-black">
      Welcome to the Dashboard
    </h2>
  );

  return (
    <div className="flex min-h-screen">
      {/* Hamburger Menu */}
      <div className="lg:hidden">
        <button onClick={toggleSidebar} className="bg-[#ED0058] text-white p-2">
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 transform transition-transform z-30 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block lg:relative lg:w-1/5 lg:h-screen bg-[#ED0058] text-white`}
        style={{ position: "sticky", top: 0, height: "100vh" }} // Add sticky styles
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
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 lg:p-8 overflow-x-auto">
        {renderDashboardHeading}
        {/* Main content goes here */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
