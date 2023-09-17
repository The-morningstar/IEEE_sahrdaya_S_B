import React from 'react';
import './AboutSection.css';
import img from './IMG.png';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>
        <p className='px-2 md:px-12'>
          IEEE Sahrdaya is a dynamic space where connections flourish and growth takes root. We offer 
          an inviting environment that encourages networking and the forging of meaningful professional 
          relationships. Our diverse range of events is meticulously designed to amplify both leadership and
           technical skills. From engaging workshops and enlightening seminars to spirited technical competitions,
            we provide a pathway for members to excel and innovate. As a community, we are dedicated to nurturing the
             latent potential of each individual. Through interactive experiences and knowledge-sharing, we strive to kindle 
             the flames of creativity and ingenuity. Join us at IEEE Sahrdaya to embark on an exciting journey of learning, 
             collaboration, and empowerment, as we collectively shape the ever-evolving landscape of technology and its impact
              on society.
        </p>
      </div>
      <div className="about-decor">
        <img src={img} alt="Decor Image" className="decor-image" />
        
      </div>
    </section>
  );
}

export default AboutSection;
