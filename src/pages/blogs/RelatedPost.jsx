import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import singleBlog1 from "../../assets/singleBlog-1.jpg";
import singleBlog2 from "../../assets/singleBlog-2.jpg";
import singleBlog3 from "../../assets/singleBlog-3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../../api/fetch";
import moment from "moment";
import { Link } from "react-router-dom";

function convertHtmlToPlainText(html) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  return tempElement.textContent || tempElement.innerText || "";
}

const RelatedPost = ({category}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getAllBlogs().then((data) => setBlogs(data));
  }, []);
  const relatedBlogs = blogs.filter(blog => blog.category === category)
  console.log("related blogs", relatedBlogs)
  return (
    <Swiper
      spaceBetween={50}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      navigation={false}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {
        relatedBlogs.map((relatedBlog, i) => <SwiperSlide key={i}>
        <div className="flex flex-col items-center">
          <div className="relative overflow-hidden">
            <img
              src={relatedBlog.image_url}
              alt="Blog Image"
              className="md:h-40 transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <Link to={`/view-blog/${relatedBlog._id}`}>

          <p className="text-center text-[#FD6585] py-3">
          {moment(relatedBlog.blog_time).format("Do MMM, YYYY")}
          </p>
          </Link>
          <div className="w-1/3 h-[2px] bg-[#FD6585] "></div>
          <p className="mt-2 text-center text-black hover:text-[#FD6585] transition-all ease-in duration-200 text-sm">
            {convertHtmlToPlainText(relatedBlog.description).slice(0, 65)}...
            
          </p>
        </div>
      </SwiperSlide>)
      }
      
      {/* <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="relative overflow-hidden">
            <img
              src={singleBlog2}
              alt="Blog Image"
              className="md:h-40 transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <p className="text-center text-[#FD6585] py-3">April 24, 2023</p>
          <div className="w-1/3 h-[2px] bg-[#FD6585] "></div>
          <p className="mt-2 text-center text-black hover:text-[#FD6585] transition-all ease-in duration-200 text-sm">
            5 Reasons You’re Still Lonely Even Though You Use Dating Apps
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="relative overflow-hidden">
            <img
              src={singleBlog3}
              alt="Blog Image"
              className="md:h-40 transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <p className="text-center text-[#FD6585] py-3">April 24, 2023</p>
          <div className="w-1/3 h-[2px] bg-[#FD6585] "></div>
          <p className="mt-2 text-center text-black hover:text-[#FD6585] transition-all ease-in duration-200 text-sm">
            5 Reasons You’re Still Lonely Even Though You Use Dating Apps
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="relative overflow-hidden">
            <img
              src={singleBlog2}
              alt="Blog Image"
              className="md:h-40 transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <p className="text-center text-[#FD6585] py-3">April 24, 2023</p>
          <div className="w-1/3 h-[2px] bg-[#FD6585] "></div>
          <p className="mt-2 text-center text-black hover:text-[#FD6585] transition-all ease-in duration-200 text-sm">
            5 Reasons You’re Still Lonely Even Though You Use Dating Apps
          </p>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default RelatedPost;
