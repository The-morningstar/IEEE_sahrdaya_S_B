import React from 'react';
import './AltAboutSection.css';
import img from './image.jpg';

const AltAboutSection = () => {
  const handleRegisterNowClick = () => {
    // Replace 'your-ticket-link' with the actual URL for your tickets page
    const ticketLink = 'https://www.yepdesk.com/buy-tickets/64fb38fa46e0fb000107e642/private/u0038gner9/category/1694186371';
    
    // Open the link in a new tab
    window.open(ticketLink, '_blank');
  };

  return (
    <section className="altabout-section">
      <div className="altabout-content">
        <h2 className="altabout-heading">Now Or Never</h2>
        <p>
        Get ready to soar with ALTAIR 2.0! 🚀 Early bird registration is now open, offering you an exclusive opportunity to secure your spot at this premier national technical conclave presented by IEEE SAHRDAYA SB. Don't miss out on the chance to dive into cutting-edge workshops, gain insights from industry experts, and network with like-minded peers. Grab your tickets at a discounted rate and be part of the future of technology at ALTAIR 2.0!
        </p>
        <button className="altregister-button" onClick={handleRegisterNowClick}>
          Grab your tickets now <span>&rarr;</span>
        </button>
      </div>
      <div className="altabout-decor">
        <img src={img} alt="Decor Image" className="altdecor-image" />
      </div>
    </section>
  );
}

export default AltAboutSection;
