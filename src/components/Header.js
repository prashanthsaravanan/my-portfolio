import React from "react";

const Header = () => {
  return (
    <header className="header" style={{paddingTop:"80px"}}>
      <h1>Prashanth S</h1>
      <p>Aspiring Software Developer | CSE Student</p>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;