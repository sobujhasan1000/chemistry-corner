import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import singleBlog1 from "../../assets/singleBlog-1.jpg";
import singleBlog2 from "../../assets/singleBlog-2.jpg";
import singleBlog3 from "../../assets/singleBlog-3.jpg";

import "swiper/css";
import "swiper/css/navigation";

const RelatedPost = () => {
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
      <SwiperSlide>
        <div className="flex flex-col items-center">
          <div className="relative overflow-hidden">
            <img
              src={singleBlog1}
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
      </SwiperSlide>
    </Swiper>
  );
};

export default RelatedPost;
