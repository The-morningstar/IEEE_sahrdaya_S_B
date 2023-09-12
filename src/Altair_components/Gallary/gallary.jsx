
import React from "react";
import bg from './bg.jpg';

import img1 from "./img/img (1).jpeg";
import img10 from "./img/img (10).jpeg";
import img11 from "./img/img (11).jpeg";
import img12 from "./img/img (12).jpeg";
import img13 from "./img/img (13).jpeg";
import img14 from "./img/img (14).jpeg";
import img15 from "./img/img (15).jpeg";
import img16 from "./img/img (16).jpeg";
import img17 from "./img/img (17).jpeg";
import img18 from "./img/img (18).jpeg";
import img19 from "./img/img (19).jpeg";
import img2 from "./img/img (2).jpeg";
import img20 from "./img/img (20).jpeg";
import img21 from "./img/img (21).jpeg";
import img22 from "./img/img (22).jpeg";
import img23 from "./img/img (23).jpeg";
import img24 from "./img/img (24).jpeg";
import img25 from "./img/img (25).jpeg";
import img26 from "./img/img (26).jpeg";
import img27 from "./img/img (27).jpeg";
import img28 from "./img/img (28).jpeg";
import img29 from "./img/img (29).jpeg";
import img3 from "./img/img (3).jpeg";
import img30 from "./img/img (30).jpeg";
import img31 from "./img/img (31).jpeg";
import img32 from "./img/img (32).jpeg";
import img33 from "./img/img (33).jpeg";
import img34 from "./img/img (34).jpeg";
import img35 from "./img/img (35).jpeg";
import img36 from "./img/img (36).jpeg";
import img37 from "./img/img (37).jpeg";
import img38 from "./img/img (38).jpeg";
import img39 from "./img/img (39).jpeg";
import img4 from "./img/img (4).jpeg";
import img40 from "./img/img (40).jpeg";
import img41 from "./img/img (41).jpeg";




// Add more image imports as needed
function AltGallery() {
    // Create an array of image URLs
    const imgUrls = [img1,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img2,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img3,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39,img4,img40,img41];
    const imgurl =[]
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
      <div className="container grid grid-cols-2  gap-2 p-1 mx-auto md:grid-cols-6">
        {imgUrls.map((url, index) => (
          <div
            key={index}
            className={`w-full h-auto rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square ${
              index === 0 || index === imgUrls.length - 1
                ? "col-span-2 row-span-2"
                : ""
            } ${
              index === 0
                ? "md:col-start-5 md:row-start-1"
                : index === imgUrls.length - 1
                ? "md:col-start-1 md:row-start-2"
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

export default AltGallery;
