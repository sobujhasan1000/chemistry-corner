import React from "react";
import Counter from "../components/Home/Counter";
import { Helmet } from "react-helmet-async";
import PremiumMembar from "../components/Home/PremiumMembar";
import CheckoutPartner from "../components/Home/CheckoutPartner";
import ChooseUs from "../components/Home/ChooseUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Chemistry Corner</title>
      </Helmet>
      <CheckoutPartner />
      <Counter></Counter>
      <PremiumMembar></PremiumMembar>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
