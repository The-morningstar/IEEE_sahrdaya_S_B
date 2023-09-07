import React from "react";
import "./styles.css";
import Slider from "react-slick";
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

// Array containing the imported image variables
const societyLogos = [
  csLogo,
  cssLogo,
  edsocLogo,
  embsLogo,
  iasLogo,
  iesLogo,
  npssLogo,
  pesLogo,
  psLogo,
  sightLogo,
  spsLogo,
  ssitLogo,
  wieLogo
];

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

  // Generate JSX elements for the slider dynamically
  const sliderItems = societyLogos.map((logo, index) => (
    <div className="slide" key={index}>
      <img src={logo} alt="logo" />
    </div>
  ));

  return (
    <div className="societyContainer">
      <h2 className="text-center text-3xl font-bold">Our Societies</h2>
      <section className="customer-logos slider">
        <Slider {...settings}>{sliderItems}</Slider>
      </section>
    </div>
  );
}

export default SocietySlider;
