import Heading from "../shared/Heading";
import Container from "../shared/Container";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../api/fetch";
import moment from "moment";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { data = [] } = useQuery({
    queryKey: ["getBlogs"], 
    queryFn: async () => {
      const data = await getBlogs();
      return data;
    },
  });

  return (
    <div className="mt-8 mb-32">
      <Container>
        {" "}
        <Heading
          title={"Dating Tips & Advice"}
          subTitle={
            "Here are some of our latest dating articles written by our staff. We hope these tips will help you get more confident and find what you are looking for."
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-4">
          {data.slice(0, 4).map((item, i) => (
            <div className="relative group ease-in-out my-8" key={i}>
              <img
                className="rounded w-full h-72 z-0 shadow-lg group-hover:scale-105 duration-200"
                src={item?.image_url}
                alt=""
              />
              <div className="opacity-80 p-4 bg-white py-6 px-4 rounded z-10 h-36  w-11/12 mx-auto absolute -bottom-8 left-4 md:left-3 space-y-2 group-hover:scale-105 duration-200 border-2">
                <div>
                  <Link
                    to={`/view-blog/${item._id}`}
                    className="text-[#212121] font-medium text-[19px] hover:text-[#fe8488] duration-200"
                  >
                    {item?.blog_heading}
                  </Link>
                  <p className="text-[#fe8488] text-[17px]">
                    {moment(item?.blog_time).format("Do MMM, YYYY")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <Link to="/blog">
            <button className="bg-[#ED0058] px-10 py-2 text-white border border-[#ED0058] hover:bg-white hover:text-[#ED0058] transition-all ease-in duration-300">
              View More
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
