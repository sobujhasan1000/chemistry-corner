import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import loveBg from '../../assets/loveBg.jpg'
import { FreeMode, Pagination } from "swiper/modules";
import Container from "../shared/Container";
import Heading from "../shared/Heading";

const LoveStories = () => {
  return (
    <div style={{ backgroundImage: `url(${loveBg})` }}>
        <Heading
            title={"Chemistry Corner's Love Stories"}
            subTitle={
              "We’re incredibly happy & proud to have sparked thousands of encounters & beautiful love stories. So please share your story with us! We need our a daily love fix."
            }
          />
      <Container>
      
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="pb-12">
            <div className="text-center">
              <img
                src="https://qiupid.modeltheme.com/wp-content/uploads/revslider/testimonial-carousel-1/avatar1.jpg"
                alt=""
                className="w-32 rounded-full mx-auto"
              />
              <p className="text-lg pt-4">
                “Qiupid et nim quam, viverra sit amet purus eget, <br />
                tempus pulvinar sollicitudin enim ac justo commodo dapibus. ”
              </p>
              <h2 className="text-xl md:text-3xl font-bold py-4">
                Devon Larret
              </h2>
              <h5 className="uppercase font-bold">founder, some company</h5>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pb-12">
            <div className="text-center">
              <img
                src="https://qiupid.modeltheme.com/wp-content/uploads/revslider/testimonial-carousel-1/avatar2.jpg"
                alt=""
                className="w-32 rounded-full mx-auto"
              />
              <p className="text-lg pt-4">
                “Love ac nunc laoreet, lobortis libero nec,
                <br />
                semper velit sollicitudin nec ligula ut, aliquet volutpat eros.”
              </p>
              <h2 className="text-xl md:text-4xl font-bold py-4">
                Jenna Smith
              </h2>
              <h5 className="uppercase font-bold">founder, some company</h5>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pb-12">
            <div className="text-center">
              <img
                src="https://qiupid.modeltheme.com/wp-content/uploads/revslider/testimonial-carousel-1/avatar3.jpg"
                alt=""
                className="w-32 rounded-full mx-auto"
              />
              <p className="text-lg pt-4">
                “Vestibulum egestas fringilla hendrerit.
                <br />
                Nam sodales nulla arcu, ac euismod elit tristique love.”
              </p>
              <h2 className="text-xl md:text-4xl font-bold py-4">
                Smith Thomas
              </h2>
              <h5 className="uppercase font-bold">founder, some company</h5>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pb-12">
            <div className="text-center">
              <img
                src="https://qiupid.modeltheme.com/wp-content/uploads/revslider/testimonial-carousel-1/avatar4.jpg"
                alt=""
                className="w-32 rounded-full mx-auto"
              />
              <p className="text-lg pt-4">
                “Quis Love ipsum suspendisse ultrices gravida
                <br />
                viverra maecenas accumsan lacus vel facilisis”
              </p>
              <h2 className="text-xl md:text-4xl font-bold py-4">
                WIthney Austin
              </h2>
              <h5 className="uppercase font-bold">founder, some company</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default LoveStories;
