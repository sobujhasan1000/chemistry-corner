import React from "react";
import Counter from "../components/Home/Counter";
import PremiumMembar from "../components/Home/PremiumMembar";
import CheckoutPartner from "../components/Home/CheckoutPartner";
import Location from "../components/Home/Location";

const Home = () => {
  return (
    <div>
      <CheckoutPartner />
      <Counter></Counter>
      <PremiumMembar></PremiumMembar>
      <Location></Location>
    </div>
  );
};

export default Home;
