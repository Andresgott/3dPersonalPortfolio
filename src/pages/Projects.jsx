import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bmwCOCHArunningLogo from "../assets/images/bmwCOCHArunninglogo.jpg";
import portfolio from "../assets/images/portfolio.png";
import angular from "../assets/images/angular.png";
import css3 from "../assets/images/css3.png";
import react from "../assets/images/React.png";
import python from "../assets/images/python.png";
import sql from "../assets/images/sql.png";
import haskell from "../assets/images/haskell.png";
import cSharp from "../assets/images/cSharp.png";
import typescript from "../assets/images/typescript.png";
import threejs from "../assets/images/threejs.png";
import c from "../assets/images/C.png";
import kotlin from "../assets/images/kotlin.png";
import selenium from "../assets/images/selenium.png";
import rasa from "../assets/images/rasa.png";
import chatbot from "../assets/images/chatbot.png";
import docker from "../assets/images/docker.png";
import git from "../assets/images/git.png";
import linux from "../assets/images/linux.png";


// Define las URLs de tus proyectos
const projectLinks = [
  "https://www.bmwcocharunning.com", // Enlace para bmwCOCHArunningLogo
  "https://www.andresgott.com", // Enlace para portfolio
  "https://www.andresgott.com" // Enlace para chatbot
];

const Projects = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(null); // Estado para la imagen en hover

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        backgroundColor: "#212529",
        minHeight: "100vh",
        color: "white",
        background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(33, 37, 41, 0.95), #212529 400px)`,
        transition: "background 0.1s",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "2%", marginTop: "7%" }}>Projects</h1>
      <div
        style={{
          width: "80%",
          height: "60vh",
          padding: "1rem 0",
        }}
      >
        <Slider {...sliderSettings}>
          {[bmwCOCHArunningLogo, portfolio, chatbot].map((image, index) => (
            <div key={index}>
              <a href={projectLinks[index]} target="_blank" rel="noopener noreferrer">
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s",
                    transform: hovered === index ? "scale(0.95)" : "scale(1)",
                  }}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>

      {/* Sección de tecnologías */}
      <h2 style={{ fontSize: "2rem", marginTop: "1%" }}>Technologies I've Worked With</h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        {[angular, react, python, css3, sql, haskell, cSharp, typescript, threejs, c, kotlin, selenium, rasa, docker, git, linux].map((techImage, index) => (
          <img
            key={index}
            src={techImage}
            alt={`Technology ${index + 1}`}
            style={{ width: "5%", height: "5%", objectFit: "contain", marginBottom: "3%" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
