import React from "react";
import Counter from "../components/Home/Counter";
import { Helmet } from "react-helmet-async";
import PremiumMembar from "../components/Home/PremiumMembar";
import CheckoutPartner from "../components/Home/CheckoutPartner";
import Location from "../components/Home/Location";
import Banner from "../components/Home/Banner";
import Blogs from "../components/Home/Blogs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Chemistry Corner</title>
      </Helmet>
      <Banner></Banner>
      <CheckoutPartner />
      <Counter></Counter>
      <PremiumMembar></PremiumMembar>
      <Location></Location>
      <Blogs />
    </div>
  );
};

export default Home;
