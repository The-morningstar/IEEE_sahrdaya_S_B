
import React from "react";
import bg from './bg.jpg';

import img1 from "./img/IMG_7235.JPG";
import img2 from "./img/IMG_7286.JPG";
import img3 from "./img/IMG_7297.JPG";
import img4 from "./img/IMG_7329.JPG";
import img5 from "./img/IMG_7332.JPG";
import img6 from "./img/IMG_7352.JPG";

// Add more image imports as needed
function Gallery() {
    // Create an array of image URLs
    const imgUrls = [img1, img2, img3,img4,img5,img6,img1, img2, img3,img4,img5,img6];

    const sectionStyle = {
        background: `url(${bg})`, // Relative to the public directory
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "40px 0",
        position: "relative",
      };
    
      const backgroundStyle = {
        content: '""',
        background: 'url("/s.jpg")', // Relative to the public directory
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "20px 0",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        transform: "scaleX(-1) rotate(180deg)", // Flip horizontally and rotate
      };
    
      const rotationStyle = {
        transform: "rotate(180deg)",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1",
      };
  
  


  return (
    <section className="py-6 text-gray-50" style={sectionStyle}>
      <div className="container grid grid-cols-2  gap-4 p-1 mx-auto md:grid-cols-6">
        {imgUrls.map((url, index) => (
          <div
            key={index}
            className={`w-full h-auto rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square ${
              index === 0 || index === imgUrls.length - 1
                ? "col-span-2 row-span-2"
                : ""
            } ${
              index === 0
                ? "md:col-start-3 md:row-start-1"
                : index === imgUrls.length - 1
                ? "md:col-start-1 md:row-start-3"
                : ""
            }`}
          >
            <img
              src={url}
              alt={`Image ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
