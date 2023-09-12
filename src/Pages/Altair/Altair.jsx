import React from 'react';


import Footer from '../../components/Footer';
import Nabar  from '../../Altair_components/Navbar/Navbar';
import AltHero from '../../Altair_components/Hero/Hero';
import AltGallery from '../../Altair_components/Gallary/gallary';
import AltAboutSection from '../../Altair_components/Earlybird/AltAbout';
import CountdownTimer from '../../Altair_components/Timer/Timer';
import Altreg from '../../Altair_components/Registration/Altreg';


const Altair = () => {
  return (
   
    <section >
      
       <Nabar/>
       
       <section id ='althome'><AltHero/></section>
       <CountdownTimer/>
       <AltAboutSection/>
       <Altreg/>
      
       
       <AltGallery/>
       
       <Footer/>
     
    </section>
    
  );
};

export default Altair;
