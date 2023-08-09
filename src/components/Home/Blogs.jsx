import React from "react";
import Heading from "../shared/Heading";
import Container from "../shared/Container";

const Blogs = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1505765052322-75804bb2e5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "5 Reasons You’re Still Lonely Even Though You Use Dating Apps",
      date: "April 24, 2023",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505765052322-75804bb2e5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Can You Text Your Way into a Successful Relationship?",
      date: "May 12, 2023",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505765052322-75804bb2e5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "9 Awesome Things Men Can Do to Score Points With Women",
      date: "May 14, 2023",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505765052322-75804bb2e5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Topics You Should Avoid Talking About When Trying To Date",
      date: "June 19, 2023",
    },
  ];
  return (
    <div className="mt-8 mb-24">
      <Container>
        {" "}
        <Heading
          title={"Dating Tips & Advice"}
          subTitle={
            "Here are some of our latest dating articles written by our staff. We hope these tips will help you get more confident and find what you are looking for."
          }
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {data.map((item, i) => (
            <div className="relative group ease-in-out" key={i}>
              <img
                className="rounded w-full h-72 z-0 shadow-lg group-hover:scale-105 duration-200"
                src={item?.image}
                alt=""
              />
              <div className="bg-white py-6 px-4 rounded z-10 h-36  w-11/12 mx-auto absolute -bottom-8 left-3 space-y-2 group-hover:scale-105 duration-200">
                <h2 className="text-[#212121] font-medium text-[19px] hover:text-[#fe8488] duration-200">
                  {item?.title}
                </h2>
                <p className="text-[#fe8488] text-[17px]">{item?.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
