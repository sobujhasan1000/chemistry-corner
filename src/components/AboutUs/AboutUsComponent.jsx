import { BsSearchHeart } from "react-icons/bs";
import aboutImg from "/pimg.png";

const AboutUsComponent = () => {
  return (
    <div className="flex items-center justify-center gap-10 container mx-auto mt-20">
      <div className="flex flex-col gap-7">
        <h1 className="text-black text-3xl font-signature">About Us</h1>
        <h4 className="text-gray-500 text-xl font-signature max-w-md">
          We are here to build emotions, connect people and create happy
          stories.
        </h4>
        <p className="text-black text-sm max-w-md">
          At Chemistry Corner, we believe that meaningful connections are the
          cornerstone of a fulfilling life. Our platform is more than just
          another online dating website – it's a community dedicated to helping
          individuals discover genuine relationships that resonate on a deeper
          level.
        </p>
        <div>
          <button className="text-xl font-medium px-3 col-span-full md:col-span-1 py-3 rounded uppercase text-white bg-[#ED0058] hover:bg-[#a33f64] flex justify-center items-center gap-2 md:gap-3">
            <BsSearchHeart size={25} />
            <span>Find your partner</span>
          </button>
        </div>
      </div>
      <div>
        <img src={aboutImg} alt="About Us section Image" className="w-96" />
      </div>
    </div>
  );
};

export default AboutUsComponent;
