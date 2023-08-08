import React from "react";
import Counter from "../components/Home/Counter";
import CheckoutPartner from "../components/Home/CheckoutPartner";

const Home = () => {
  return (
    <div>
      <CheckoutPartner />
      <Counter></Counter>
    </div>
  );
};

export default Home;
