import React from "react";
import "./Footer.scss";

const Footer = () => (
  <React.Fragment>
    <div className="footer-container">
      <p>
        For any queries, call us at{" "}
        <a href="tel:+8801854795992">+8801854795992</a> or reach out to us at{" "}
        <a href="mailto:hello@tutorlab.io">hello@tutorlab.io</a>.
      </p>
      <p>© TutorLab 2022</p>
    </div>
    <a href="tel:+8801854795992">+8801854795992</a>
  </React.Fragment>
);

export default Footer;
