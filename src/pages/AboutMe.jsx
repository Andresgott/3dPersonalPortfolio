import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Flow } from "three/examples/jsm/modifiers/CurveModifier.js";

// Component for each Typewriter message, typing once and staying static
const TypewriterMessage = ({ message }) => {
  return (
    <Typewriter
      options={{
        strings: [message],
        autoStart: false,
        delay: 30,
        cursor: "", 
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(message)
          .pauseFor(1000) 
          .callFunction(() => {
            typewriter.stop(); 
          })
          .start();
      }}
    />
  );
};

// Define PropTypes for TypewriterMessage
TypewriterMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

const AboutMe = () => {
  const mountRef = useRef(null);
  const initialMessage =
    "Hello! I’m here to answer questions about Andres. Choose a question below:";
  
  const [chatLog, setChatLog] = useState([
    {
      sender: "bot",
      message: initialMessage,
    },
  ]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const questions = [
    "Who are you?",
    "Where are you from?",
    "What are your skills?",
    "What projects have you worked on?",
    "What are your career goals?",
    "Which languages do you speak?",
    "Which technologies have you worked with?",
    "Can I have your CV?",
  ];

  const responses = {
    "Who are you?":
      "I’m Andres Gottlieb, a Computer Systems Engineering student with a passion for technology.",
    "Where are you from?":
      "I'm originally from Bolivia but I also have German nationality.",
    "What are your skills?":
      "I have knowledge in front-end and back-end development, databases, and AI.",
    "What projects have you worked on?":
      "I’ve developed a web app for BMW Cocha Running and an AI chatbot for Master Motors BMW.",
    "What are your career goals?":
      "I aim to develop innovative solutions and contribute to the tech industry creatively.",
    "Which languages do you speak?":
      "I speak Spanish, English, and German fluently.",
    "Which technologies have you worked with?":
      "I have worked with programming languages such as Python, C#, C, C++, JavaScript, Kotlin, Haskell and with some technologies such as Rasa, Angular, React.",
    "Can I have your CV?": "Sure! I’m happy to provide my CV for you.",
  };

  useEffect(() => {
    let scene, camera, renderer, flow;
    const init = () => {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0d0d0d);

      const containerWidth = mountRef.current.clientWidth;
      const containerHeight = mountRef.current.clientHeight;

      camera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 1, 1000);
      camera.position.set(3, 3, 6);
      camera.lookAt(scene.position);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(containerWidth, containerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      const directionalLight = new THREE.DirectionalLight(0xffdd88, 3);
      directionalLight.position.set(-10, 15, 20);
      scene.add(directionalLight);

      const ambientLight = new THREE.AmbientLight(0x404040, 2);
      scene.add(ambientLight);

      const curveHandles = [
        new THREE.Vector3(1, 0, -1),
        new THREE.Vector3(1, 0, 1),
        new THREE.Vector3(-1, 0, 1),
        new THREE.Vector3(-1, 0, -1),
      ];

      const curve = new THREE.CatmullRomCurve3(curveHandles);
      curve.curveType = "centripetal";
      curve.closed = true;

      const loader = new FontLoader();
      loader.load("/fonts/Roboto_Light_Regular.json", (font) => {
        const geometry = new TextGeometry("Andres Gottlieb Guzman", {
          font: font,
          size: 0.3,
          height: 0.05,
          bevelEnabled: true,
          bevelThickness: 0.01,
          bevelSize: 0.02,
          bevelSegments: 5,
        });

        const material = new THREE.MeshStandardMaterial({
          color: 0x0099ff,
          roughness: 0.5,
          metalness: 0.1,
        });

        const textMesh = new THREE.Mesh(geometry, material);
        geometry.rotateX(Math.PI);
        textMesh.rotation.y = Math.PI;
        flow = new Flow(textMesh);
        flow.updateCurve(0, curve);
        scene.add(flow.object3D);
      });

      const animate = () => {
        requestAnimationFrame(animate);
        if (flow) {
          flow.moveAlongCurve(0.002);
        }
        renderer.render(scene, camera);
      };
      animate();
    };

    init();

    const handleResize = () => {
      const containerWidth = mountRef.current.clientWidth;
      const containerHeight = mountRef.current.clientHeight;
      renderer.setSize(containerWidth, containerHeight);
      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleQuestionClick = (question) => {
    setChatLog([
      ...chatLog,
      { sender: "user", message: question },
      { sender: "bot", message: responses[question] },
    ]);
    if (question === "Can I have your CV?") {
      setTimeout(() => handleDownloadCV(), 1000);
    }
  };

  return (
    <div
      className="flex flex-col items-center px-4 py-6 md:px-10 md:py-10 bg-gray-100"
      style={{ minHeight: "calc(100vh - 64px)" }} // Adjust according to navbar height
    >
      <div
        ref={mountRef}
        className="w-full"
        style={{
          height: "80vh",
          marginTop: "15%",
          marginBottom: "2rem",
          position: "relative",
          zIndex: 1, // Ensure the canvas is behind the navbar
          overflow: "hidden",
        }}
      />

      <div
        style={{ backgroundColor: "#0d0d0d" }}
        className="p-4 md:p-8 rounded-lg shadow-lg w-full max-w-2xl mt-6"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center">
          Ask Me a Question
        </h2>
        <div className="h-48 overflow-y-auto mb-4 p-4 border rounded bg-gray-50">
          {chatLog.map((entry, index) => (
            <div
              key={`${entry.message}-${index}`}
              className={`mb-2 ${
                entry.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              {entry.sender === "bot" && entry.message === initialMessage ? (
                // Render the initial message as plain text without Typewriter
                <div className="inline-block bg-gray-200 px-4 py-2 rounded border border-gray-300 text-gray-800">
                  {entry.message}
                </div>
              ) : entry.sender === "bot" ? (
                <div className="inline-block bg-gray-200 px-4 py-2 rounded border border-gray-300 text-gray-800">
                  <TypewriterMessage message={entry.message} />
                </div>
              ) : (
                <span className="inline-block px-4 py-2 rounded bg-blue-500 text-white">
                  {entry.message}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {questions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(question)}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 text-sm md:text-base"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
