import React from "react";
import Counter from "../components/Home/Counter";
import PremiumMembar from "../components/Home/PremiumMembar";
import CheckoutPartner from "../components/Home/CheckoutPartner";

const Home = () => {
  return (
    <div>
      <CheckoutPartner />
      <Counter></Counter>
      <PremiumMembar></PremiumMembar>
    </div>
  );
};

export default Home;
