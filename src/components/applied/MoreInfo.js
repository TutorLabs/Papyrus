import "./MoreInfo.scss";
import OutlinedButtom from "../ui-components/OutlinedButton";
import Check from "../../images/check.svg";
import Cross from "../../images/cross.svg";

import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";

export default function MoreInfo({ tutor }) {
  const cookies = new Cookies();
  const params = useParams();

  const postid = params.id;
  const data = {
    tutor_id: tutor._id,
  };
  const handleLike = () => {
    fetch(`/api/likedtutor/${postid}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify(data),
    });
  };

  const handleReject = () => {
    fetch(`/api/rejectedtutor/${postid}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify(data),
    });
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
          text="Like"
          green={true}
          click={handleLike}
        />
        <OutlinedButtom
          icon={Cross}
          text="Reject"
          green={false}
          click={handleReject}
        />
      </div>

      <h1>{`${tutor.firstname} ${tutor.lastname}`}</h1>
      <h2>Education:</h2>
      <p>
        <span>University:</span> {tutor.university}
      </p>
      <p>
        <span>Major:</span> {tutor.major}
      </p>
      <p>
        <span>School:</span> {tutor.school}
      </p>
      <p>
        <span>Medium:</span> {tutor.medium}
      </p>
      <p>
        <span>Class:</span>
        {tutor.class}
      </p>
      <h2>
        Online/In-person: <span>{tutor.online}</span>
      </h2>
      <h2>
        Tutor's Gender: <span>{tutor.tutor_gender}</span>
      </h2>

      <h2>Bio:</h2>
      <p>{tutor.bio}</p>

      <h2>Locations they are willing to commute to:</h2>
      <p>{tutor.locations.join(", ")}</p>
      <h2>How many days a week?</h2>
      <p>{tutor.days}/week</p>
      <h2>Subjects they are willing to teach:</h2>
      <p>{tutor.subjects.join(", ")}</p>
      <h2>Preferred monthly salary:</h2>
      <p>
        {tutor.max_salary} - {tutor.min_salary} tk
      </p>
      <h2>Extra Curricular Activities (ECAs):</h2>
      <p>{tutor.eca}</p>
      <h2>Hobbies:</h2>
      <p>{tutor.hobbies}</p>
      <h2>Previous Experience:</h2>
      <p>{tutor.experience}</p>
    </div>
  );
}
