import { Helmet } from "react-helmet-async";
import AboutUsComponent from "../components/AboutUs/AboutUsComponent";
import OurCommunity from "../components/AboutUs/OurCommunity";
import LoveStories from "../components/Home/LoveStories";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">About Us</h1>
        </div>
      </div>
      <AboutUsComponent></AboutUsComponent>
      <OurCommunity></OurCommunity>
      <LoveStories></LoveStories>
    </div>
  );
};

export default AboutUs;
