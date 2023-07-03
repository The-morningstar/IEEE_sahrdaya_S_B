import React, { useState } from "react";
import "./styles.css"; // Import CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [Toggled, setToggled] = useState(false);
  return (
    <header className="header flex md:flex-row flex-col justify-between">
      <div className="flex justify-between w-full">
        <div className="logo">
          <a href="/">IEEE Sahrdaya </a>
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
        className={`menu ${
          Toggled ? "flex" : "hidden"
        } md:flex flex-col md:flex-row justify-center text-center md:py-2 py-10`}
      >
        <ul className="flex flex-col md:flex-row font-medium gap-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Societies</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
