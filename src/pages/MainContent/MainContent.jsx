import React from "react";
import Hero from "../../components/Home/Hero/Hero";
import NowShowing from "../../components/Home/NowShowing/NowShowing";

import SpecialOffers from "../../components/Home/SpecialOffers/SpecialOffers";
import CinemaLocations from "../../components/Home/CinemaLocations/CinemaLocations";
import Features from "../../components/Home/Features/Features";
import ExperienceHighlight from "../../components/Home/ExperienceHighlight/ExperienceHighlight";

const MainContent = () => {
  return (
    <main>
      <Hero />
      <NowShowing />
      <Features />
      <SpecialOffers />
      <CinemaLocations />
      <ExperienceHighlight />
    </main>
  );
};

export default MainContent;
