import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./altair.css";
import altair from './Altair.mp4';
const Altair = () => {
 
  const [isPlaying, setIsPlaying] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const video = document.querySelector(".rotated-video");
    video.playbackRate = 0.5;
    video.addEventListener("play", () => {
      setIsPlaying(true);
    });
    video.addEventListener("pause", () => {
      setIsPlaying(false);
    });
  }, []);
  const handleExploreClick = () => {
    navigate('/altair');
  };
  return (
    <div className="altair-section">
      <video src={altair} autoPlay loop muted className="rotated-video"></video>
      <div className="altcont">
        <h1 className="althead">ALTAIR</h1>
        <p className="subtext">Fly into Future</p>
      </div>
     <button onClick={handleExploreClick} className="explore-more-button">explore</button>
          
    </div>
  );
};
export default Altair;