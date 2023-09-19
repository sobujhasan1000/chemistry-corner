import { FaSellsy, FaUsers } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdFormatListBulletedAdd } from "react-icons/md";
import ApexChart from "./Charts/LineChart/LineChart";
import PieChart from "./Charts/PieChart/PieChart";
import PolarChart from "./Charts/PolarChart/PolarChart";
import { useEffect, useState } from "react";
import { getAllMembers } from "../../../../api/fetch";

const AdminHome = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllMembers().then((data) => setUsers(data));
  }, []);

  const men = users.filter((user) => user.gender === "male").length;
  const women = users.filter((user) => user.gender === "female").length;
  const nonBinary = users.filter((user) => user.gender === "non-binary").length;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="grid justify-center items-center bg-[#d1e9fc] shadow-xl rounded-lg py-6">
          <FaSellsy className="w-20 h-20 text-[#103996]"></FaSellsy>

          <h3 className="text-[#061b64] font-bold text-2xl">{users.length}</h3>
          <p className="font-semibold text-sm text-[#061b64]">Total Users</p>
        </div>

        <div className="grid justify-center items-center bg-[#d0f2ff] shadow-xl rounded-lg py-6">
          <FaUsers className="w-20 h-20 text-[#0c59b7]"></FaUsers>

          <h3 className="text-[#04297a] font-bold text-2xl">{men}</h3>
          <p className="font-semibold text-sm text-[#04297a]"> Men</p>
        </div>

        <div className="grid justify-center items-center bg-[#fff7cd] shadow-xl rounded-lg py-6">
          <MdFormatListBulletedAdd className="w-20 h-20 text-[#b78103]"></MdFormatListBulletedAdd>

          <h3 className="text-[#7a4f01] font-bold text-2xl">{women}</h3>
          <p className="font-semibold text-sm text-[#7a4f01]"> women</p>
        </div>

        <div className="grid justify-center items-center bg-[#ffe7d9] shadow-xl rounded-lg py-6">
          <FaMoneyBillTrendUp className="w-20 h-20 text-[#b72136]"></FaMoneyBillTrendUp>

          <h3 className="text-[#7a0c2e] font-bold text-2xl">{nonBinary}</h3>
          <p className="font-semibold text-sm text-[#7a0c2e]"> Non-Binary</p>
        </div>
      </div>
      <div>
        <div className="md:flex gap-4">
          <div className="md:w-3/5">
            <ApexChart />
          </div>
          <div className="md:w-2/5">
            <PieChart />
          </div>
        </div>
        <div className="w-full md:w-2/5 md:h-2/5">
            <PolarChart></PolarChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
