import { Helmet } from "react-helmet-async";
import { BiTrash } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { getContractUs } from "../../../api/fetch";
import { useEffect, useState } from "react";

const UsersInquiries = () => {

  const [inquiries, setInquiries] = useState([]);
  useEffect(() => {
    getContractUs().then((data) => setInquiries(data));
  }, []);
  // const inquiries = [
  //   {
  //     name: "sobuj",
  //     email: "sobuj@gmail.com",
  //     subject: "help us user",
  //     message: "I have a question about your website...",
  //   },
  // ];

  return (
    <div>
      <Helmet>
        <title>Users Inquiries - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Users Inquiries</h1>
        </div>
      </div>

      <div className="overflow-x-auto mt-12 px-8 text-black">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-xl">
            <tr>
              <th>Si No </th>
              <th>Name</th>
              <th>email</th>
              <th>subject</th>
              <th>message</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {inquiries.map((inquiry, index) => (
              <tr key={12}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    {/* <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={inquiry?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div> */}
                    <div>
                      <div className="font-bold">{inquiry.name}</div>
                    </div>
                  </div>
                </td>
                <td>{inquiry.email}</td>
                <td>
                  {inquiry.subject}
                  stars
                </td>
                <td>{inquiry.message?.slice(0, 20)}...</td>
                <th>
                  <button
                    title="View"
                    className="rounded-md bg-[#ED0058] hover:bg-white p-2 text-white hover:text-black border border-[#ED0058] transition-all ease-in-out duration-300"
                  >
                    <FaRegEye />
                  </button>
                </th>
                <td>
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
    </div>
  );
};

export default UsersInquiries;
