import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/navbar';
import TeamSection from '../../components/OurTeam/team';
import SocietySlider from '../../components/SocietySlider';
import Stats from '../../components/stats/stats';
import Des from '../../components/des/des';
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallary/gallary';
import Altair from '../../components/Altair/Altair';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <section id="home">
      <Hero/>
      </section>
     
      <section id="about">
      <Des/>
      <Stats/>
      </section>
     
      
      < Gallery/>

  
      <section id="societies">
        <SocietySlider />
      </section>
      

      <section id="altair">
      <Altair/>
      </section>
      
      
      
        <TeamSection />
        
        <Footer/>
      
    </>
  );
};

export default HomePage;
