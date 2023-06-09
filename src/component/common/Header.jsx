import React from 'react';
import './Header.css'; // Import CSS file for styling


const Header = () => {
  return (
    <header className="header">
      <div className="logo"><a href="#">IEEE Sahrdaya </a></div>
      <nav className="menu">
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Societies</a></li>
          <li><a href='#'>Events</a></li>
          
          </ul>

      </nav>
    </header>
  );
};

export default Header;
