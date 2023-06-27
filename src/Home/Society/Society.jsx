import React, { useEffect } from 'react';
import './custom-society.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import csLogo from './images/cs.png';
import cssLogo from './images/css.png';
import edsocLogo from './images/edsoc.png';
import embsLogo from './images/embs.png';
import iasLogo from './images/ias.png';
import iesLogo from './images/ies.png';
import npssLogo from './images/npss.png';
import pesLogo from './images/pes.png';
import psLogo from './images/ps.png';
import sightLogo from './images/sight.png';
import spsLogo from './images/sps.png';
import ssitLogo from './images/ssit.png';
import wieLogo from './images/wie.png';



function Society() {
  useEffect(() => {
    $(document).ready(() => {
      $('.customer-logos').slick({
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
      });
    });
  }, []);
  

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Our - Partners</title>
        <link rel="stylesheet" href="style.css" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
      </head>
      <body>
        <div className="societycontainer">
          <h2 className="text-center font-weight-bold">Our Socities</h2>
          <section className="customer-logos slider">
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

          </section>
        </div>

        <script>
          {`$(
            document
          ).ready(function() {
            $('.customer-logos').slick({
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
                  setting: {
                    slidesToShow: 4,
                  },
                },
                {
                  breakpoint: 520,
                  setting: {
                    slidesToShow: 3,
                  },
                },
              ],
            });
          });`}
        </script>
      </body>
    </html>
  );
}

export default Society;
