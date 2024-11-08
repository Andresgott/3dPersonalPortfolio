import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header p-4 flex justify-between items-center bg-white shadow-md">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">AG</p>
      </NavLink>

      {/* Icono de menú hamburguesa para pantallas pequeñas */}
      <div className="md:hidden" onClick={toggleMenu}>
        <button className="text-3xl focus:outline-none">
          ☰
        </button>
      </div>

      {/* Nav principal - visible en desktop, oculto en mobile */}
      <nav className="hidden md:flex text-lg gap-7 font-medium">
        <NavLink to="/aboutMe" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          About Me
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          Contact me
        </NavLink>
      </nav>

      {/* Menú desplegable para mobile */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white flex flex-col items-center text-lg font-medium md:hidden shadow-lg z-100">
          <NavLink
            to="/aboutMe"
            onClick={toggleMenu}
            className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
          >
            About Me
          </NavLink>
          <NavLink
            to="/projects"
            onClick={toggleMenu}
            className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
          >
            Contact me
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
