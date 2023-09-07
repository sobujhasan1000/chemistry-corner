import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BiTrash, BiUserCircle } from "react-icons/bi";
import { getAllMembers } from "../../../../api/fetch";
import { FaUserShield } from "react-icons/fa";

import "./ManageUser.css";
import { updateUserRole } from "../../../../api/auth";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const ManageUser = () => {
  // const [users, setUsers] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState("");

  // useEffect(() => {
  //   getAllMembers().then((data) => setUsers(data));
  // }, []);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await getAllMembers();
      return data;
    },
  });

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSetRole = (id, role) => {
    updateUserRole(id, role).then((result) => {
      if (result.modifiedCount > 0) {
        toast.success("Role given");
        refetch();
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Manage Users - Chemistry Corner</title>
      </Helmet>
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="mr-2">Rows per page:</label>
          <select
            className="border border-gray-300 text-[#ED0058] rounded-md px-2 py-1"
            value={perPage}
            onChange={(e) => {
              setCurrentPage(1);
              setPerPage(parseInt(e.target.value));
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search by Name"
          className="border border-[#ED0058] rounded-md px-2 py-1 placeholder:text-[#ED0058] focus:outline-pink-800"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-[#ED0058] text-left text-base text-white font-medium capitalize tracking-wider leading-4 rounded-lg">
            <tr>
              <th className="px-6 py-3 rounded-tl-lg">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Manage Role</th>
              <th className="px-6 py-3 rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((item, i) => (
              <tr key={i} className="bg-white">
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 capitalize">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {item.email}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 capitalize">
                  {!item?.role ? "user" : item?.role}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex justify-start items-center gap-2">
                  <button
                    onClick={() => handleSetRole(item._id, "admin")}
                    title="Admin"
                    className="p-2 border border-[#ED0058] hover:bg-white bg-[#ED0058] text-white hover:text-[#ED0058] transition-all ease-in duration-300"
                  >
                    <BiUserCircle />
                  </button>
                  <button
                    onClick={() => handleSetRole(item._id, "super-admin")}
                    title="Super Admin"
                    className="p-2 border border-[#ED0058] bg-white hover:bg-[#ED0058] text-[#ED0058] hover:text-white transition-all ease-in duration-300"
                  >
                    <FaUserShield />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <button
                    title="Delete"
                    className="rounded-md hover:bg-[#ED0058] bg-white p-2 hover:text-white text-black border border-[#ED0058] transition-all ease-in-out duration-300"
                  >
                    <BiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className={`mr-2 ${
            currentPage === 1
              ? "cursor-not-allowed bg-gray-300"
              : "hover:bg-gray-200 bg-white"
          } py-2 px-4 rounded-md border border-gray-300`}
          onClick={() => {
            if (currentPage > 1) {
              handlePageChange(currentPage - 1);
            }
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`${
            currentPage * perPage >= filteredUsers.length
              ? "cursor-not-allowed bg-gray-300"
              : "hover:bg-gray-200 bg-white"
          } py-2 px-4 rounded-md border border-gray-300`}
          onClick={() => {
            if (currentPage * perPage < filteredUsers.length) {
              handlePageChange(currentPage + 1);
            }
          }}
          disabled={currentPage * perPage >= filteredUsers.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageUser;
