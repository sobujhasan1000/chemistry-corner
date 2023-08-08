import React from "react";
import Counter from "../components/Home/Counter";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Chemistry Corner</title>
      </Helmet>
      <Counter></Counter>
    </div>
  );
};

export default Home;
