import React, { useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Offer from "./Offer";
import Suggested from "./Suggested";
import TopPage from "./TopPage";
import Trending from "./Trending";

const Landing = () => {
  const [show, setshow] = useState(false);

  return (
    <>
      <TopPage />
      <div className="px-3 sm:px-14 md:px-20">
        <Banner />
        <Trending />
        <Offer />
      </div>
      <Suggested />
      <Footer />
    </>
  );
};

export default Landing;
