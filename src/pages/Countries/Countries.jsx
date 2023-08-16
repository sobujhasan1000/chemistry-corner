import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useForm } from "react-hook-form";
const Countries = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="relative">
        <Swiper
          loop={true}
          effect={"fade"}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img
                src="https://momodesigns.in/html/lamour/images/slide_img1.jpg"
                alt=""
                className="block max-w-full"
              />
              <div className="flex items-center">
                <div className="w-1/2">
                  <div className="flex flex-col justify-center space-y-2 text-white p-8 md:py-8 md:px-16 bg-black bg-opacity-60 absolute inset-0">
                    <h2 className="text-2xl md:text-6xl font-extrabold uppercase leading-tight">
                      <span className="text-yellow-500">100% Free</span> Online
                      <br />
                      Dating
                    </h2>
                    <p className="text-lg md:text-3xl pt-3 leading-normal">
                      Connecting singles across the world to
                      <br />
                      their ideal partner
                    </p>
                    <div className="pt-3 md:pt-6">
                      <button class="btn px-4 md:px-8 md:py-2 md:text-lg text-white border-2 bg-[#ED0058] border-[#ED0058] rounded-[70px] hover:bg-transparent hover:border-[#ED0058] hover:text-[#ED0058]">
                        <a href="/">View More</a>
                      </button>
                      <button class="btn btn-outline px-4 md:px-8 py-2 ms-5 md:text-lg text-white border-2 border-white rounded-[70px] hover:bg-[#ED0058] hover:border-[#ED0058]">
                        <a href="/">Register</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src="https://momodesigns.in/html/lamour/images/slide_img4.jpg"
                alt=""
                className="block max-w-full"
              />
              <div className="flex items-center">
                <div className="w-1/2">
                  <div className="flex flex-col justify-center space-y-2 text-white p-8 md:py-8 md:px-16 bg-black bg-opacity-60 absolute inset-0">
                    <h2 className="text-2xl md:text-6xl font-extrabold uppercase leading-tight">
                      <span className="text-yellow-500">100% Free</span> Online
                      <br />
                      Dating
                    </h2>
                    <p className="text-lg md:text-3xl pt-3 leading-normal">
                      Connecting singles across the world to
                      <br />
                      their ideal partner
                    </p>
                    <div className="pt-3 md:pt-6">
                      <button class="btn px-4 md:px-8 md:py-2 md:text-lg text-white border-2 bg-[#ED0058] border-[#ED0058] rounded-[70px] hover:bg-transparent hover:border-[#ED0058] hover:text-[#ED0058]">
                        <a href="/">View More</a>
                      </button>
                      <button class="btn btn-outline px-4 md:px-8 py-2 ms-5 md:text-lg text-white border-2 border-white rounded-[70px] hover:bg-[#ED0058] hover:border-[#ED0058]">
                        <a href="/">Register</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src="https://momodesigns.in/html/lamour/images/slide_img5.jpg"
                alt=""
                className="block max-w-full"
              />
              <div className="flex items-center">
                <div className="w-1/2">
                  <div className="flex flex-col justify-center space-y-2 text-white p-8 md:py-8 md:px-16 bg-black bg-opacity-60 absolute inset-0">
                    <h2 className="text-2xl md:text-6xl font-extrabold uppercase leading-tight">
                      <span className="text-yellow-500">100% Free</span> Online
                      <br />
                      Dating
                    </h2>
                    <p className="text-lg md:text-3xl pt-3 leading-normal">
                      Connecting singles across the world to
                      <br />
                      their ideal partner
                    </p>
                    <div className="pt-3 md:pt-6">
                      <button class="btn px-4 md:px-8 md:py-2 md:text-lg text-white border-2 bg-[#ED0058] border-[#ED0058] rounded-[70px] hover:bg-transparent hover:border-[#ED0058] hover:text-[#ED0058]">
                        <a href="/">View More</a>
                      </button>
                      <button class="btn btn-outline px-4 md:px-8 py-2 ms-5 md:text-lg text-white border-2 border-white rounded-[70px] hover:bg-[#ED0058] hover:border-[#ED0058]">
                        <a href="/">Register</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="py-10 px-8 bg-[#dbdddd] w-full md:w-96 p-2 md:absolute top-4 md:top-[25%] left-10 md:right-40 right-0 md:left-[48rem] z-20 border-8 border-gray-500 rounded-[20px]">
        <h1 className="text-xl md:text-3xl font-medium text-center">
          Introducing Lamour
        </h1>
        <p className="text-lg md:text-xl text-center py-4">
          Connecting singles across the world to their ideal partner
        </p>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="gender">I am a :</label>
              <select
                className="select select-bordered w-full max-w-xs my-2"
                id="gender"
                {...register("gender")}
              >
                <option disabled selected>
                  Choose your preferences
                </option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
                <option value="binary">Binary</option>
              </select>
            </div>
            <div>
              <label htmlFor="ageFrom">Between Age :</label>
              <div className="flex gap-5">
                <select
                  className="select select-bordered w-full max-w-xs my-2"
                  id="ageFrom"
                  {...register("ageFrom")}
                >
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                </select>
                <select
                  className="select select-bordered w-full max-w-xs my-2"
                  id="ageTo"
                  {...register("ageTo")}
                >
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <select
                className="select select-bordered w-full max-w-xs my-2"
                id="location"
                {...register("location")}
              >
                <option value="amsterdam">Amsterdam</option>
                <option value="london">London</option>
                <option value="barcelona">Barcelona</option>
                <option value="new-york">New York</option>
                <option value="mexico">Mexico</option>
              </select>
            </div>
            <button
              className="mt-4 font-medium text-xl text-center px-20 py-3 bg-[#ED0058] hover:bg-transparent text-white hover:text-[#ED0058] rounded-[70px] border-2 hover:border-[#ED0058]"
              type="submit"
            >
              Take a change
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Countries;
