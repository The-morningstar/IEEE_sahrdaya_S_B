import React from "react";
import "./styles.css";
import sundarimg from "./images/sundar.jpeg";
import maniimg from "./images/mani.jpeg";
import satheeshimg from "./images/satheesh.jpeg";
import antonyimg from "./images/antony.jpeg";
import ansonimg from "./images/anson.jpeg";
import safaimg from "./images/safa.jpg";

const OurTeam = () => {
  const data = [
    {
      cover: <img src={sundarimg} alt="Product 1" />, // Replace with the image URL for Product 1
      title: "Dr. R Sundar",
      decs: (
        <>
          Branch councellor
          <br />
          Dept.Computer Science & Engg.
        </>
      ),
    },
    {
      cover: <img src={satheeshimg} alt="Product 2" />, // Replace with the image URL for Product 2
      title: "Dr. Satheesh kumar",
      decs: (
        <>
          Senior IEEE Member
          <br />
          Advisor - computer society
          <br />
          Dept.Computer Science & Engg.
        </>
      ),
    },
    {
      cover: <img src={maniimg} alt="Product 1" />, // Replace with the image URL for Product 1
      title: "Dr. Manishankar A",
      decs: (
        <>
          Professional IEEE Member
          <br />
          Advisor
          <br />
          Dept.Computer Science & Engg.
        </>
      ),
    },
    {
      cover: <img src={antonyimg} alt="Product 1" />, // Replace with the image URL for Product 1
      title: "Antony Paul",
      decs: (
        <>
          Mentor
          <br />
        </>
      ),
    },
    {
      cover: <img src={ansonimg} alt="Product 1" />, // Replace with the image URL for Product 1
      title: "Anson M J",
      decs: (
        <>
          Mentor
          <br />
        </>
      ),
    },
    {
      cover: <img src={safaimg} alt="Product 1" />, // Replace with the image URL for Product 1
      title: "Safa Abdul Salam",
      decs: (
        <>
          SB Chairperson
          <br />
        </>
      ),
    },
  ];

  return (
    <section className="wrapper background">
      <h2 className="text-center text-3xl font-bold">Our Team</h2>
      <div className="container grid4">
        {data.map((val, index) => {
          return (
            <div className="product" key={index}>
              <div className="img icon-circle">{val.cover}</div>
              <h3 className="font-bold">{val.title}</h3>
              <p>{val.decs}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurTeam;
