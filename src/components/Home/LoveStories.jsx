import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import loveBg from "../../assets/loveBg.jpg";
import { FreeMode, Pagination } from "swiper/modules";
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
          feedbackRating: parseInt(story.feedbackRating, 10),
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
        title={"Chemistry Corner's Love Stories"}
        subTitle={
          "We’re incredibly happy & proud to have sparked thousands of encounters & beautiful love stories. So please share your story with us! We need our a daily love fix."
        }
      />
      <Container>
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          loop={true}
          pagination={{
            clickable: true,
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
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {data.map((stories) => (
            <SwiperSlide key={stories._id} className="pb-12">
              <div className="text-center flex flex-col items-center">
                <img
                  src={stories.image}
                  alt=""
                  className="w-32 rounded-full mx-auto"
                />
                <p className="text-lg pt-4">{stories.feedbackDetails}</p>
                <h2 className="text-xl md:text-3xl font-bold py-4">
                  {stories.name}
                </h2>

                <Rating
                  style={{ maxWidth: 100 }}
                  value={stories.feedbackRating}
                  readOnly
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default LoveStories;
