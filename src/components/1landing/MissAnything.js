import "./MissAnything.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export default function MissAnything() {
  const { t } = useTranslation();
  return (
    <div className="miss_anything">
      <p className="title">{t('Did we miss anything?')}</p>
      <p className="content">
        {t('Reach out to us at')} {" "}
        <a href="mailto:hello@tutorlab.io">hello@tutorlab.io</a>
      </p>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/mahzabin-rashid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="circle" id="arrow">
            <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/mahzabin-rashid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="circle" id="arrow">
            <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/mahzabin-rashid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="circle" id="arrow">
            <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
          </div>
        </a>
      </div>
    </div>
  );
}
