import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import loveBg from '../../assets/loveBg.jpg'
import { FreeMode, Pagination } from "swiper/modules";
import Container from "../shared/Container";
import Heading from "../shared/Heading";
import { useEffect, useState } from "react";
import axios from "axios";


const LoveStories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/loveStories`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return (
    <div className="p-1"  style={{ backgroundImage: `url(${loveBg})` }}>
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
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >

         {data.map(stories=>(
          <SwiperSlide className="pb-12">
          <div className="text-center" key={stories._id}>
              <img
                src={stories.image}
                alt=""
                className="w-32 rounded-full mx-auto"
              />
              <p className="text-lg pt-4">
                {stories.comment}
              </p>
              <h2 className="text-xl md:text-3xl font-bold py-4">
               {stories.name}
              </h2>
              <h5 className="uppercase font-bold">{stories.position}, {stories.company}</h5>
            </div>
            </SwiperSlide>
         ))}
            
        </Swiper>
      </Container>
    </div>
  );
};

export default LoveStories;
