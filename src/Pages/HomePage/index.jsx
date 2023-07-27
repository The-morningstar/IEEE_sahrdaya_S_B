import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/navbar";
import Event from "../../components/Events/event";

import TeamSection from "../../components/OurTeam/team"
import SocietySlider from "../../components/SocietySlider";

import "./styles.css";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Event/>
      <SocietySlider />
      
      <TeamSection />
      
      <Footer />
    </>
  );
};

export default HomePage;
