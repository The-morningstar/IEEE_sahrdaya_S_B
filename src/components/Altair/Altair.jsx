import React from "react";
import { useNavigate } from 'react-router-dom';
import "./altair.css";
import altairImage from './banner.png'

const Altair = () => {
 
  
  const navigate = useNavigate();
  
  
  const handleExploreClick = () => {
    navigate('/altair');
  };
  return (
    <div className="altair-section">
      
  <img src={altairImage} alt="Altair Image" className="rotated-image" />
  <button onClick={handleExploreClick} className="explore-more-button">Explore <span>&rarr;</span></button>

</div>
  );
};
export default Altair;