import { useState } from "react";
import CountUp from "react-countup";
import { FaFilm } from "react-icons/fa";
import mapBg from "../assets/map-bg.png";
import status_01 from "../assets/status_01.png";
import status_02 from "../assets/status_02.png";
import status_03 from "../assets/status_03.png";
import status_04 from "../assets/status_04.png";

const Counter = () => {
  return (
    <div className="grid items-center justify-center text-center" style={{ backgroundImage: `url(${mapBg})`}}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">It all starts with a Date</h1>
        <p className="my-12">
          You find us, finally, and you are already in love. More than 5.000.000
          around the world already shared the same experience and uses our <br />
          system. <strong>Joining us today just got easier!</strong>
        </p>
        <div className="flex mb-4 justify-center">
          <button className="mr-3 px-4 py-2 bg-[#13A0CA] hover:bg-[#5aabc4] text-white rounded-lg">
            Join us for FREE
          </button>
          <button className="px-6 py-2 bg-[#ED0058] hover:bg-[#a33f64] text-white rounded-lg flex items-center">
            Our TV Commercial <span className="ml-1"><FaFilm /></span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white shadow-lg p-4 rounded-lg text-gray-500">
            <img src={status_01} alt="" />
            <CountUp className="text-3xl" start={-1} end={8} duration={4} />
            <p className="pt-3 text-lg">Members in total</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg text-gray-500 ">
          <img src={status_04} alt="" />
            <CountUp className="text-3xl" start={-1} end={1200} duration={4} />
            <p className="pt-3 text-lg">Men online</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg text-gray-500">
            <img src={status_03} alt="" />
            <CountUp className="text-3xl" start={-1} end={900} duration={4} />
            <p className="pt-3 text-lg">Women online</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg text-gray-500">
          <img src={status_02} alt="" />
            <CountUp className="text-3xl" start={-1} end={2100} duration={4} />
            <p className="pt-3 text-lg">Members online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
