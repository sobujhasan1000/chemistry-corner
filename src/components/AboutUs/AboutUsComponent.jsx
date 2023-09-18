import { BsSearchHeart } from "react-icons/bs";
import aboutImg from "/pimg.png";
import Container from "../shared/Container";
import { Link } from "react-router-dom";

const AboutUsComponent = () => {
  return (
    <>
      <Container className="bg-pink-100">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 container mx-auto mt-10 md:mt-20">
          <div className="flex flex-col gap-3 md:gap-7 w-80 md:w-full">
            <h1 className="text-black text-xl md:text-3xl font-signature">
              About Us
            </h1>
            <h4 className="text-gray-500 text-base md:text-xl font-signature max-w-xs md:max-w-md">
              We are here to build emotions, connect people and create happy
              stories.
            </h4>
            <p className="text-black text-xs md:text-sm max-w-xs md:max-w-md">
              At Chemistry Corner, we believe that meaningful connections are
              the cornerstone of a fulfilling life. Our platform is more than
              just another online dating website – it&apos;s a community
              dedicated to helping individuals discover genuine relationships
              that resonate on a deeper level.
            </p>
            <div>
              <Link to="/members">
                <button className="text-xl font-medium px-3 col-span-full md:col-span-1 py-3 rounded uppercase text-white bg-[#ED0058] hover:bg-[#a33f64] flex justify-center items-center gap-2 md:gap-3">
                  <BsSearchHeart size={25} />
                  <span>Find your partner</span>
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={aboutImg}
              alt="About Us section Image"
              className="w-72 md:w-full"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUsComponent;
