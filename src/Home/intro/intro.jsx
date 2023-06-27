import React from 'react';
import './custom-intro.css';
import inimg from './images/in.jpg';

const Intro = () => {
  return (
    <section className="first-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="subheading">Welcome to</p>
            <h1 className="heading">IEEE Sahrdaya SB</h1>
          </div>
          <div className="col-lg-6">
            <img src={inimg} alt="Image" className="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
