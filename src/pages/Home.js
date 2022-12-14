import React from "react";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/live-auction/LiveAuction";
import SellerSection from "../components/ui/seller-section/SellerSection";
import StepSection from "../components/ui/step-section/StepSection";
import TrendingSection from "../components/ui/trending-section/TrendingSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <TrendingSection />
      <StepSection />
    </>
  );
};

export default Home;
