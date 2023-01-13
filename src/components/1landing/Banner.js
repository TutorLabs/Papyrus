import "./Banner.scss";

import Typed from "react-typed";

export default function Banner() {
  return (
    <div className="banner">
      <p className="title">
        Find a great private <br/> <span>tutor online</span>
      </p>
      <p className="content">
        Prepare to succeed and get help with{" "}
        <Typed
          loop
          strings={["Math", "Physics", "Chemistry"]}
          typeSpeed={40}
          backSpeed={50}
          className="typist"
        />
      </p>
      <button className="button">Request invitation to waitlist</button>
    </div>
  );
}
