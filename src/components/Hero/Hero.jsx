import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="himg">
      <div className="element">
        {/* Content inside the div */}
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            IEEE Sahrdaya SB
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Sahrdaya College Of Engineering And Technology
          </p>

          {/* Replace the buttons with the logo divs */}
          <div className="mt-8 flex justify-center gap-10">
            <div className="shrdya"></div> {/* Replace with your first logo */}
            <div className="ieee"></div>{/* Replace with your second logo */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
