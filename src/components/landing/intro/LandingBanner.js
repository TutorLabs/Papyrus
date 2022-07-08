import "./LandingBanner.scss";

import FirstButton from "./FirstButton";
import SecondButton from "./SecondButton";

export default function LandingBanner() {
  return (
    <div className="landing_banner">
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
        <FirstButton />
        <SecondButton />
      </div>
    </div>
  );
}
