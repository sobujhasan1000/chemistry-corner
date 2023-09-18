import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import loveBg from "../../assets/loveBg.jpg";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import Container from "../shared/Container";
import Heading from "../shared/Heading";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const LoveStories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/feedbacks`)
      .then((response) => {
        const updatedData = response.data.map((story) => ({
          ...story,
          feedbackRating: parseFloat(story.feedbackRating),
        }));
        setData(updatedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="p-1" style={{ backgroundImage: `url(${loveBg})` }}>
      <Heading
        title={"Chemistry Corner's users feedback"}
        subTitle={
          "We’re incredibly happy & proud to have sparked thousands of encounters & beautiful love stories. So please share your story with us! We need our a daily love fix."
        }
      />
      <Container>
        <Swiper
          slidesPerView={1}
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
              slidesPerView: 2,
            },
            // When window width is < 768px (mobile)
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {data.map((stories) => (
            <SwiperSlide key={stories._id} className="pb-12">
              <div className="text-center flex flex-col items-center">
                <img
                  src={stories.image}
                  alt=""
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <h2 className="capitalize text-xl md:text-2xl font-bold py-4">
                  {stories.name}
                </h2>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={stories.feedbackRating}
                  readOnly
                />
                <p className="text-lg pt-4">
                  {stories.feedbackDetails.slice(0, 150)}...
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default LoveStories;
