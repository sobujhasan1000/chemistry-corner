import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="bg-[#ED0058] text-white p-2">
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 transform transition-transform z-30 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block lg:relative lg:w-1/4 lg:h-screen bg-[#ED0058] text-white`}
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
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 lg:p-8">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to the Dashboard
        </h2>
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default DashboardLayout;
