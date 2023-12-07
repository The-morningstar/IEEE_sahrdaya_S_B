import React from 'react';
import './Altreg.css';
import img from './image1.jpeg';

const Altreg = () => {
  const handleRegisterNowClick = () => {
    // Replace 'your-ticket-link' with the actual URL for your tickets page
    const ticketLink = 'https://www.yepdesk.com/embed/buy-tickets/64fb38fa46e0fb000107e642/private/u0038gner9';
    
    // Open the link in a new tab
    window.open(ticketLink, '_blank');
  };

  return (
    <section className="altabout-section flex-col md:flex-row h-full ">
      <div className="altabout-content">
        <h2 className="altabout-heading leading-tight md:leading-relaxed">Register Now </h2>
        <p>
        Get ready for an incredible journey of knowledge and innovation! We're excited to announce that registration is now open for Altair 2.0, presented by IEEE SAHRDAYA SB. Altair 2.0 is a three-day national technical conclave that offers top-tier workshops, insights from industry experts, and a platform to enhance your skills in cutting-edge technologies such as AI and sustainable energy. Don't miss this opportunity to join us at Altair 2.0 and secure your spot for an immersive learning experience. Register today and take the first step toward a technology-driven future!
        </p>
        <button className="altregister-button" >
          Closed !!! <span>&rarr;</span>
        </button>
      </div>
      <div className="altabout-decor mt-20 md:mt-0">
        <img src={img} alt="Decor Image" className="altdecor-image" />
      </div>
    </section>
  );
}

export default Altreg;
