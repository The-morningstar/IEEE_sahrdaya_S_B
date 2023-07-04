import React from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import OurTeam from "../../components/OurTeam";
import SocietySlider from "../../components/SocietySlider";
import "./styles.css";
const HomePage = () => {
  return (
    <>
      <Header />
      <Intro />
      <Card />
      <OurTeam />
      <SocietySlider />
      <Footer />
    </>
  );
};

export default HomePage;
