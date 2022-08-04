import "./LandingBanner.scss";

import FirstButton from "./FirstButton";
import SecondButton from "./SecondButton";
import MobileBanner from "../../../images/landing_banner_mobile.png";

import { Link } from "react-router-dom";

export default function LandingBanner() {
  return (
    <div className="landing_banner">
      <div className="mobile_banner">
        <img src={MobileBanner} />
      </div>
      <h1>
        Experience <span>Better</span> <br />
        Learning.
      </h1>
      <p>
        Find a private tutor to learn any subject you need.
        <br />
        Be a part of our community and start your new learning journey!
      </p>
      <div>
        <Link to="/signup" className="home_action_box_link">
          <FirstButton />
        </Link>
        <Link to="/signup" className="home_action_box_link">
        <SecondButton />
        </Link>
      </div>
    </div>
  );
}
