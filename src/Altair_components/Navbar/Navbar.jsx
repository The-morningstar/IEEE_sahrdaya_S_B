import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll'; // Import Link from 'react-scroll' for smooth scrolling


import './custom-Navbar.css';

const Navbar = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <header className="altheader flex md:flex-row flex-col justify-between">
      <div className="flex justify-between w-full">
        <div className="altlogo">
          {/* Use Link instead of anchor (a) tags */}
          <Link to="althome" smooth={true} duration={500}>
            ALTAIR
          </Link>
        </div>
        <FontAwesomeIcon
          className="text-lg border-gray-600 text-gray-800 border-2 p-2 rounded-md cursor-pointer md:hidden"
          icon={faBars}
          onClick={() => {
            setToggled((t) => !t);
          }}
        />
      </div>
      <nav
        className={`menu ${toggled ? 'visible' : ''} md:flex flex-col md:flex-row justify-center text-center md:py-2 py-10`}
      >
        <ul className="flex flex-col md:flex-row font-medium gap-10">
          <li>
            <Link to="althome" smooth={true} duration={500}>
              Home
            </Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
