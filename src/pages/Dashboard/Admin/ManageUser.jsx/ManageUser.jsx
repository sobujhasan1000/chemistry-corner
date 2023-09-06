import { Helmet } from "react-helmet-async";
import "./ManageUser.css";
import { BiUserCircle } from "react-icons/bi";
import { BsTrash, BsEye } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getAllMembers } from "../../../../api/fetch";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllMembers().then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Manage Users - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold"> Manage Users</h1>
        </div>
      </div>
      {/* Users table */}
      <duv className="flex items-center justify-center mt-10">
        <div className="container">
          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead className="text-white">
              <tr className="bg-[#ED0058] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Manage Role</th>
                <th className="p-3 text-left" width="110px">
                  Actions
                </th>
              </tr>
              <tr className="bg-[#ED0058] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Manage Role</th>
                <th className="p-3 text-left" width="110px">
                  Actions
                </th>
              </tr>
              <tr className="bg-[#ED0058] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Manage Role</th>
                <th className="p-3 text-left" width="110px">
                  Actions
                </th>
              </tr>
              <tr className="bg-[#ED0058] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Manage Role</th>
                <th className="p-3 text-left" width="110px">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="flex-1 sm:flex-none">
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                >
                  <td className="border-grey-light border hover:bg-gray-100 p-3 text-black">
                    {user.name}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate  text-black">
                    {user.email}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate  text-black">
                    user
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                    <button
                      title="Admin"
                      className="p-2 border border-[#ED0058] bg-white hover:bg-[#ED0058] text-[#ED0058] hover:text-white transition-all ease-in duration-300 mr-3"
                    >
                      <FaUserShield />
                    </button>
                    <button
                      title="User"
                      className="p-2 border border-[#ED0058] hover:bg-white bg-[#ED0058] text-white hover:text-[#ED0058] transition-all ease-in duration-300"
                    >
                      <BiUserCircle />
                    </button>
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                    <button
                      title="View"
                      className="p-2 border border-[#ED0058] bg-white hover:bg-[#ED0058] text-[#ED0058]  hover:text-white transition-all ease-in duration-300 mr-3"
                    >
                      <BsEye />
                    </button>
                    <button
                      title="Delete"
                      className="p-2 border border-[#ED0058] hover:bg-white bg-[#ED0058] text-white hover:text-[#ED0058] transition-all ease-in duration-300"
                    >
                      <BsTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </duv>
    </div>
  );
};

export default ManageUser;
