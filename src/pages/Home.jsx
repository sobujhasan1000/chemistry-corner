import Counter from "../components/Home/Counter";
import { Helmet } from "react-helmet-async";
import CheckoutPartner from "../components/Home/CheckoutPartner";
import ChooseUs from "../components/Home/ChooseUs";
import Location from "../components/Home/Location";
import Banner from "../components/Home/Banner";
import Blogs from "../components/Home/Blogs";
import LoveStories from "../components/Home/LoveStories";
import PremiumMember from "../components/Home/PremiumMember";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Chemistry Corner</title>
      </Helmet>
      <Banner />
      <CheckoutPartner />
      <Counter />
      <PremiumMember />
      <ChooseUs />
      <Location />
      <Blogs/>
      <LoveStories />
    </div>
  );
};

export default Home;
