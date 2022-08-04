import React from "react";
import "./Footer.scss";

const Footer = () => (
    <React.Fragment>
        <div className="footer-container">
        <p className="footer-title">For any queries, contact us at <a href="mailto:hello@tutorlab.io">hello@tutorlab.io</a></p>
            <p className="footer-title">© TutorLab 2022</p>
        </div>
    </React.Fragment>
);

export default Footer;