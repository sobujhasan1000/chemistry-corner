import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

import img1 from "/slider-1.jpg";
import img2 from "/slider-2.jpg";
import img3 from "/slider-3.jpg";
import img4 from "/slider-4.jpg";

import { FaUser } from "react-icons/fa";


const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={false}
        pagination={true}
        effect={"fade"}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="md:h-[85vh]">
            <img src={img1} alt="Slider Image" className="h-full w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[85vh]">
            <img src={img2} alt="Slider Image" className="h-full w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[85vh]">
            <img src={img3} alt="Slider Image" className="h-full w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[85vh]">
            <img src={img4} alt="Slider Image" className="h-full w-full" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" bg-[#ee236e] w-2/3 md:w-96 p-2 absolute top-4 md:top-[25%] left-10 md:left-40 right-0 md:right-0 z-20">
        <div className="bg-[#ED0058] px-2 md:px-4 py-3 md:py-6">
          <h1 className="text-base md:text-xl text-white mb-4">
            Create an Account
          </h1>
          <p className="text-xs md:text-sm text-white mb-3">
            Please Register to visit all features of Chemistry Corner, just
            click the button Sign Up below and we will go to a new Signup page.
          </p>
          <div className="w-full flex justify-end">
            <button className="bg-[#e84681] inline-flex items-center gap-2 text-white px-3 md:px-5 py-2">
              <FaUser />
              Sign Up
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
