import React, { useState, useEffect } from "react";
import profile from "../assets/images/profile.jpg";
import linkedin from "../assets/images/linkedin.png";
import x from "../assets/images/x.jpg";
import facebook from "../assets/images/facebook.png";
import mail from "../assets/images/mail.jpg";
import github from "../assets/images/github.png";
import insta from "../assets/images/insta.png";
import goodreads from "../assets/images/goodreads.png";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        backgroundColor: "#212529",
        minHeight: "100vh",
        color: "white",
        padding: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(33, 37, 41, 0.95), #212529 400px)`,
        transition: "background 0.1s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          marginBottom: "2rem",
          width: "100%",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* Imagen de perfil */}
        <img
          src={profile}
          alt="Profile"
          style={{
            width: isMobile ? "50%" : "20%",
            borderRadius: "50%",
            marginBottom: isMobile ? "1rem" : "0",
            marginTop: "10%",
          }}
        />

        {/* Título */}
        <h1 style={{ fontSize: "2.5rem", marginTop: "10%", textAlign: "center" }}>Contact me</h1>
      </div>

      {/* Contenedor de redes sociales */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
        </a>
        <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer">
          <img src={x} alt="Twitter" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
        </a>
        <a href="https://facebook.com/tu-usuario" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
        </a>
        <a href="mailto:tu-correo@example.com">
          <img src={mail} alt="Mail" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
        </a>
        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
        </a>
        <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
        </a>
        <a href="https://www.goodreads.com/user/show/tu-usuario" target="_blank" rel="noopener noreferrer">
          <img src={goodreads} alt="Goodreads" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
