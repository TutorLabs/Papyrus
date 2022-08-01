import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotifBox from "./NotifBox";
import LanguageToggle from "./LanguageToggle";
function Navbar() {
  const [isActive, setActive] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const toggleNavbar = () => {
    setActive(!isActive);
  };

  const showNotifications = () => {
    setNotifications((prevNotif) => !prevNotif);
  };

  return (
    <nav className="navbar">
      <div className="brand-title"></div>
      <div className="toggle-button" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <Link to="/notifications">
        <div className="mobile-notification">
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon sx={{ color: "#221F20" }} />
          </Badge>
        </div>
      </Link>
      <div className="mobile_language_toggle">
        <LanguageToggle />
      </div>

      <div className={isActive ? "active navbar-links" : "navbar-links"}>
        <ul onClick={toggleNavbar}>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/verify">Verify</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/apply">Apply</Link>
          </li>
          <li>
            <Link to="/applied">Applied</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
          <div className="desktop_language_toggle">
            <LanguageToggle />
          </div>

          <div className="notifications" onClick={showNotifications}>
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon sx={{ color: "#221F20" }} />
            </Badge>
          </div>
          {notifications ? <NotifBox /> : null}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
