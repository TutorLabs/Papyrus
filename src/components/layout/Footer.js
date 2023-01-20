import React from "react";
import "./Footer.scss";

const Footer = () => (
  <React.Fragment>
    <div className="footer-container">
      <p>
        For any queries, contact us at{" "}
        <a href="mailto:hello@tutorlab.io">hello@tutorlab.io</a>
      </p>
      <p>© TutorLab 2022</p>
    </div>
  </React.Fragment>
);

export default Footer;
