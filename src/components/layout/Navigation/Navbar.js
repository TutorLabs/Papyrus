import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import Logo from "../../../images/logo.svg";
//redux
import { useDispatch } from "react-redux";
import { updateToken, updateRole, updateSignedIn } from "../../../redux/auth";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router";
function Navbar() {
  const [isActive, setActive] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role, signedIn } = useSelector((state) => state.auth);

  const toggleNavbar = () => {
    setActive(!isActive);
  };

  const handleLogout = () => {
    dispatch(updateToken({}));
    dispatch(updateRole(""));
    dispatch(updateSignedIn(false));
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="brand-title">
          <img alt="user" src={Logo} />
        </div>
      </Link>
      <div className="toggle-button" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="mobile_language_toggle">
        <LanguageToggle />
      </div>

      <div className={isActive ? "active navbar-links" : "navbar-links"}>
        <ul onClick={toggleNavbar}>
          {signedIn === true && role === "student" && (
            <li>
              <Link to="/studenthome">Home</Link>
            </li>
          )}
          {signedIn === true && role === "student" && (
            <li>
              <Link to="/create">Create</Link>
            </li>
          )}
          {signedIn === true && role === "tutor" && (
            <li>
              <Link to="/tutorhome">Home</Link>
            </li>
          )}
          {signedIn === true && role === "tutor" && (
            <li>
              <Link to="/apply">Apply</Link>
            </li>
          )}
          {signedIn === true && role === "tutor" && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {signedIn === false && (
            <li>
              {/* <Link to="/signup">Sign up/Log in</Link> */}
            </li>
          )}
          {signedIn === true && (
            <li onClick={handleLogout}>
              <Link to="/">Sign out</Link>
            </li>
          )}

          <div className="desktop_language_toggle">
            <LanguageToggle />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
