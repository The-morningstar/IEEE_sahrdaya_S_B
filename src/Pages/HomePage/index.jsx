import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/navbar';
import Event from '../../components/Events/event';
import TeamSection from '../../components/OurTeam/team';
import SocietySlider from '../../components/SocietySlider';
import IconBlocks from '../../components/Iconblock';
import Feature from '../../components/features/feature';
import Stats from '../../components/stats/stats';
import Wrapper from '../../components/Wrapper/wrapper';

import Altair from '../../components/Altair/Altair';
import Hero from '../../components/Hero/Hero';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Feature/>
      <Altair/>

      <Stats/>
      <IconBlocks/>
      {/* Section with ID "home" */}
      <section id="events">
        <Event />
      </section>

  {/* Section with ID "societies" */}
  <section id="societies">
        <SocietySlider />
      </section>
      
      
      {/* Section with ID "about" */}
      <section id="about">
        <TeamSection />
      </section>

  

      {/* Other sections and components */}
      {/* ... */}
     
      
    
      <Footer/>
      
    </>
  );
};

export default HomePage;
