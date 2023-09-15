import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useSingleUser from "../../../Hooks/useSingleUser";
import { getLikesListById } from "../../../api/fetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Like = () => {
  const { user } = useContext(AuthContext);
  const [singleUser, loading] = useSingleUser(user.email);
  const { data: likes = [] } = useQuery({
    queryKey: ["likesList", user.email],
    enabled: !loading,
    queryFn: async () => {
      const data = await getLikesListById(singleUser._id);
      return data;
    },
  });

  return (
    <div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          loop={false}
          pagination={true}
          navigation={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // When window width is >= 768px (desktop)
            768: {
              slidesPerView: 3,
            },
            // When window width is < 768px (mobile)
            0: {
              slidesPerView: 1,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {likes.map((user) => (
            <SwiperSlide
              key={user._id}
              className="flex flex-col md:flex-row items-center px-4 py-6 gap-4 "
            >
              <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
                <img
                  src={user?.image}
                  alt=""
                  className="w-full h-[310px] md:h-36 rounded-lg"
                />
              </div>
              <div className="bg-pink-100 px-8 py-6 bg-opacity-60 opacity-0 hover:opacity-100 text-gray-800 absolute inset-0 transition-opacity duration-200 flex flex-col justify-between items-center">
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-3xl md:text-base text-center md:text-left mt-10 md:mt-1">
                    {user?.name}
                  </p>
                </div>

                <Link
                  to={`/view-profile/${user?._id}`}
                  className="bg-[#FD6585] hover:bg-[#ED0058] text-white border-4 border-[#FD6585] hover:border-[#ED0058] mt-auto mb-4 rounded-lg"
                >
                  View Details
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Like;
