import "./MoreInfo.scss";
import OutlinedButtom from "../ui-components/OutlinedButton";
import Check from "../../images/check.svg";
import Cross from "../../images/cross.svg";
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function MoreInfo(props) {
  const handleLike = () => {
    alert("liked!");
  };

  const handleReject = () => {
    alert("rejected :((");
  };

  return (
    <div className="more_info">
      <img
        alt="user"
        src="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <div className="posting_buttons">
        <OutlinedButtom
          icon={Check}
          text="Edit Posting"
          green={true}
          click={handleLike}
        />
        <OutlinedButtom
          icon={Cross}
          text="Delete Posting"
          green={false}
          click={handleReject}
        />
      </div>

      <h1>Mahzabin Rashid Fariha</h1>
      <h2>Education:</h2>
      <p>
        <span>University:</span> University of Waterloo
      </p>
      <p>
        <span>Major:</span> Computer Science
      </p>
      <p>
        <span>School:</span> Sunnydale
      </p>
      <p>
        <span>Medium:</span> English Medium
      </p>
      <p>
        <span>Class:</span>N/A
      </p>
      <h2>
        Online/In-person: <span>Online</span>
      </h2>
      <h2>
        Tutor's Gender: <span>Female</span>
      </h2>
      <h2>
        Preferred Gender: <span>None</span>
      </h2>
      <h2>Bio:</h2>
      <p>
        Second-year Computer Science student at University of Waterloo
        interested in integrating technology with the creative arts and bringing
        ideas to life through code and collaboration. If you think our interests
        align, drop me a message!
      </p>

      <h2>Locations they are willing to commute to:</h2>
      <p>Dhanmondi, Gulshan, Banani</p>
      <h2>How many days a week?</h2>
      <p>3/week</p>
      <h2>Subjects they are willing to teach:</h2>
      <p>English, Bangla, Math, Biology</p>
      <h2>Preferred monthly salary:</h2>
      <p>5,000 - 10,000 tk</p>
      <h2>Extra Curricular Activities (ECAs):</h2>
      <p>
        Second-year Computer Science student at University of Waterloo
        interested in integrating technology with the creative arts and bringing
        ideas to life through code and collaboration. If you think our interests
        align, drop me a message!
      </p>
      <h2>Hobbies:</h2>
      <p>
        Second-year Computer Science student at University of Waterloo
        interested in integrating technology with the creative arts and bringing
        ideas to life through code and collaboration. If you think our interests
        align, drop me a message!
      </p>
      <h2>Previous Experience:</h2>
      <p>
        Second-year Computer Science student at University of Waterloo
        interested in integrating technology with the creative arts and bringing
        ideas to life through code and collaboration. If you think our interests
        align, drop me a message!
      </p>
    </div>
  );
}
