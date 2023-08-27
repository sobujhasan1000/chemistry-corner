import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Container from "../../components/shared/Container";
import { Link } from "react-router-dom";

const MemberShip = () => {
  const packages = [
    {
      packageName: "7 Days Free Trial",
      packInfo: "$15.00 Now And Then $30.00 Per Month..",
      price: 0,
      packInclude: ["Feature X", "Feature Y", "Feature R"],
    },
    {
      packageName: "Gold",
      packInfo: "$15.00 Now And Then $50.00 Per Month.",
      price: 14.99,
      packInclude: ["Feature P", "Feature Q", "Feature R"],
    },
    {
      packageName: "Platinum",
      packInfo: "$15.00 Now And Then $60.00 Per Month..",
      price: 29.99,
      packInclude: ["Feature Alpha", "Feature Beta", "Feature R"],
    },
  ];
  return (
    <Container className="my-10 bg-[#bbd2ec] text-black">
      <div className="text-center bg-[#f1f7fe] py-6">
        <h1 className="text-[40px] font-bold">Membership Levels</h1>
        <p>
          Our dating platform is like a breath of fresh air. Clean and trendy
          design with ready <br /> to use features we are sure you will love.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-[#f1f7fe]">
        {packages.map((item, i) => (
          <div className="gap-2 bg-[#fff] text-center hover:shadow-2xl" key={i}>
            <h1 className="text-2xl font-bold py-8">{item.packageName}</h1>
            <p className="px-10 py-8 bg-[#eca9c2] text-xl">{item.packInfo}</p>
            <h1 className="text-2xl font-bold py-2">${item.price}</h1>
            <span className="divider"></span>
            <ul>
              {item.packInclude.map((feature, i) => (
                <li className=" text-xl" key={i}>
                  <FaCheckCircle className="text-blue-400 mb-[-20px] ml-[50px]" />
                  {feature} <span className="divider px-4"></span>
                </li>
              ))}
            </ul>
            <Link
              to={`/membership/${i}`}
              className="btn bg-[#ED0058] mb-4 hover:bg-[#eca9c2] shadow-xl uppercase"
            >
              select plan
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MemberShip;
