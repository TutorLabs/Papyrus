import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

function Navbar() {
  const [isActive, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="brand-title"></div>
      <div className="toggle-button" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={isActive ? "active navbar-links" : "navbar-links"}>
        <ul>
          <li>
            <Link to="/authentication">Authentication</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
