import React, { useEffect } from "react";

import Footer from "../../components/Footer";
import Nabar from "../../Altair_components/Navbar/Navbar";
import AltHero from "../../Altair_components/Hero/Hero";
import AltGallery from "../../Altair_components/Gallary/gallary";
import AltAboutSection from "../../Altair_components/Earlybird/AltAbout";
import CountdownTimer from "../../Altair_components/Timer/Timer";
import Altreg from "../../Altair_components/Registration/Altreg";

const Altair = () => {
  // scroll to top when navigated from other pages
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section>
      <Nabar />

      <section id="althome">
        <AltHero />
      </section>
      <CountdownTimer />
      <AltAboutSection />
      <Altreg />

      <AltGallery />

      <Footer />
    </section>
  );
};

export default Altair;
