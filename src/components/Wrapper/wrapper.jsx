import React from 'react';
import './Wrapper.css';
import sponser1 from './sponsors1.png';
import sponser2 from './sponsors2.png';
import sponser3 from './sponsors3.png';
import sponser4 from './sponsors4.png';
import sponser5 from './sponsors5.png';

const images = [
  {
    src: sponser1, 
    alt: "sponser1",
  },
  {
    src: sponser2, 
    alt: "sponser1",
  },
  {
    src: sponser3, 
    alt: "sponser1",
  },
  {
    src: sponser4, 
    alt: "sponser1",
  },
  {
    src: sponser5, 
    alt: "sponser1",
  },
];

const Wrapper = () => {
  return (
    <section className="p-6" style={{ background: "#ffff", color: "#E8FFC2" }}>
      <div className="container mx-auto grid justify-items-center grid-cols-1 text-center lg:grid-cols-5 ">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col justify-start m-2 lg:m-6">
            <img
              src={image.src}
              alt={image.alt}
              className="image-container"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wrapper;
