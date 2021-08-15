import React from "react";
import "../../App.css";
import Cards from "../Cards.component";
import Footer from "../Footer.component";
import HeroSection from "../HeroSection.component";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
