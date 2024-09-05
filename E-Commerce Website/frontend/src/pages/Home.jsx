import React from "react";
import { Bestseller, Hero, LatestCollection, NewsLetter, OurPolicy } from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <Bestseller/>
      <OurPolicy/>
      <NewsLetter/>
    </div>
  );
};

export default Home;
