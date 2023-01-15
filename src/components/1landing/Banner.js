import "./Banner.scss";

import Typed from "react-typed";

export default function Banner() {
  return (
    <div className="banner">
      <p className="title">
        Experience better <br /> <span>learning</span>
      </p>
      <p className="content">
        Say goodbye to struggling, and hello to success with the right tutor
        <br />
        Get help with{" "}
        <Typed
          loop
          strings={["Math", "Physics", "Economics", "Chemistry", "Accounting", "Biology", "Business Studies"]}
          typeSpeed={40}
          backSpeed={50}
          className="typist"
        />
      </p>
      <button className="button">Request invitation to waitlist</button>
    </div>
  );
}
