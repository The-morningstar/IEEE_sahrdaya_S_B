import React from "react";
import "./styles.css";
import csLogo from "./images/cs.png";
import cssLogo from "./images/css.png";
import edsocLogo from "./images/edsoc.png";
import embsLogo from "./images/embs.png";
import iasLogo from "./images/ias.png";
import iesLogo from "./images/ies.png";
import npssLogo from "./images/npss.png";
import pesLogo from "./images/pes.png";
import psLogo from "./images/ps.png";
import sightLogo from "./images/sight.png";
import spsLogo from "./images/sps.png";
import ssitLogo from "./images/ssit.png";
import wieLogo from "./images/wie.png";
import Slider from "react-slick";

function SocietySlider() {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="societyContainer">
      <h2 className="text-center font-weight-bold">Our Socities</h2>
      <section className="customer-logos slider">
        <Slider {...settings}>
          <div className="slide">
            <img src={csLogo} alt="logo" />
          </div>
          <div className="slide">
            <img src={cssLogo} alt="logo" />
          </div>
          <div className="slide">
            <img src={edsocLogo} alt="logo" />
          </div>
          <div className="slide">
            <img src={embsLogo} alt="logo" />
          </div>
          <div className="slide">
            <img src={iasLogo} alt="logo" />
          </div>
          <div className="slide">
            <img src={iesLogo} alt="logo" />
          </div>
          <div className="slide">
            <img src={npssLogo} alt="logo" />
          </div>
          <div className="slide">
            <img src={pesLogo} alt="logo" />
          </div>
          <div className="slide">
            <img src={psLogo} alt="logo" />
          </div>
          <div className="slide">
            <img src={sightLogo} alt="logo" />
          </div>
          <div className="slide">
            <img src={spsLogo} alt="logo" />
          </div>
          <div className="slide">
            <img src={ssitLogo} alt="logo" />
          </div>
          <div className="slide">
            <img src={wieLogo} alt="logo" />
          </div>
        </Slider>
      </section>
    </div>
  );
}

export default SocietySlider;
