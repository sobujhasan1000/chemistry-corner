import CountUp from "react-countup";
// import { FaFilm } from "react-icons/fa";
import mapBg from "../../assets/map-bg.png";
import status_01 from "../../assets/status_01.png";
import status_02 from "../../assets/status_02.png";
import status_03 from "../../assets/status_03.png";
import status_04 from "../../assets/status_04.png";
import { getAllMembers } from "../../api/fetch";
import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllMembers().then((data) => setUsers(data));
  }, []);

  const men = users.filter((user) => user.gender === "male").length;
  const women = users.filter((user) => user.gender === "female").length;
  const nonBinary = users.filter((user) => user.gender === "non-binary").length;

  return (
    <div
      className="grid items-center justify-center text-center"
      style={{ backgroundImage: `url(${mapBg})` }}
    >
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-[#212121] font-bold my-4 font-signature">
          It all starts with a Date
        </h1>
        <p className="mb-12 text-[#212121]">
          You find us, finally, and you are already in love. More than 5.000.000
          around the world already shared the same experience and uses our{" "}
          <br />
          system. <strong>Joining us today just got easier!</strong>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white shadow-lg p-4 rounded-lg text-gray-500 hover:scale-105 duration-200">
            <img src={status_01} alt="" />
            <CountUp
              className="text-3xl"
              start={-1}
              end={users.length}
              duration={4}
            />
            <p className="pt-3 text-lg">Members in total</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg text-gray-500 hover:scale-105 duration-200">
            <img src={status_04} alt="" />
            <CountUp className="text-3xl" start={-1} end={men} duration={4} />
            <p className="pt-3 text-lg">Men</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg text-gray-500 hover:scale-105 duration-200">
            <img src={status_03} alt="" />
            <CountUp className="text-3xl" start={-1} end={women} duration={4} />
            <p className="pt-3 text-lg">Women</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg text-gray-500 hover:scale-105 duration-200">
            <img src={status_02} alt="" />
            <CountUp
              className="text-3xl"
              start={-1}
              end={nonBinary}
              duration={4}
            />
            <p className="pt-3 text-lg">Non-Binary</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
