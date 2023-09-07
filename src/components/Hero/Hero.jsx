import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section>
      <div className="himg">
        <div className="gradient-overlay"></div> {/* Gradient overlay div */}
        
        <div className="relative mx-auto max-w-screen-xl px-5 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            
          <p className="engg">
              Sahrdaya College Of Engineering And Technology
            </p>
            <h1 className="hea">
              IEEE Sahrdaya SB
            </h1>


            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
