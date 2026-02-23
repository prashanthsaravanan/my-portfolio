function Navbar() {
  return (
    <nav className="navbar">
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", maxWidth:"1200px", margin:"auto"}}>
        <h1>Prashanth</h1>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;