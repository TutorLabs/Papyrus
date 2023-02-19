import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import Button from "../../ui-components/Button";
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
          <p>TutorLab</p>
        </div>
      </Link>
      <div className="toggle-button" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {signedIn === false && (
        <div className="number">
          <p>📞 01854795992</p>
        </div>
      )}

      {signedIn === false && (
        <Link to="/signup" className="mobile_auth_buttons">
          Sign up/Log in
        </Link>
      )}

      {signedIn === true && (
        <div className="login_feedback">
          <Button
            text="Give Feedback"
            click={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdEpyJbDXU847_OxlKtgr4_0TNz39cnirFqfK3V92GgcFjfyw/viewform?usp=sf_link",
                "_blank",
                "noreferrer"
              );
            }}
          />
        </div>
      )}

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
              <Link to="/signup" className="desktop_auth_buttons">
                Sign up/Log in
              </Link>
            </li>
          )}
          {signedIn === true && (
            <li onClick={handleLogout}>
              <Link to="/">Sign out</Link>
            </li>
          )}

          <div className="language_toggle">
            <LanguageToggle />
          </div>

          {signedIn === false && (
            <Button
              text="Give Feedback"
              click={() => {
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdEpyJbDXU847_OxlKtgr4_0TNz39cnirFqfK3V92GgcFjfyw/viewform?usp=sf_link",
                  "_blank",
                  "noreferrer"
                );
              }}
            />
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
