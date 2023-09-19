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

import CreateAnAccount from "../AuthComponent/CreateAnAccount";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="relative">
      <Swiper
        navigation={false}
        pagination={true}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="md:h-[85vh] md:max-lg:h-[40vh] md:max-xl:h-[40vh]">
            <img src={img1} alt="Slider Image" className="h-full w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[85vh] md:max-lg:h-[40vh] md:max-xl:h-[40vh]">
            <img src={img2} alt="Slider Image" className="h-full w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[85vh] md:max-lg:h-[40vh] md:max-xl:h-[40vh]">
            <img src={img3} alt="Slider Image" className="h-full w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[85vh] md:max-lg:h-[40vh] md:max-xl:h-[40vh]">
            <img src={img4} alt="Slider Image" className="h-full w-full" />
          </div>
        </SwiperSlide>
      </Swiper>
      {!user && <CreateAnAccount></CreateAnAccount>}
    </div>
  );
};

export default Banner;
