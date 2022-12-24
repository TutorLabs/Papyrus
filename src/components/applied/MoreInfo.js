import "./MoreInfo.scss";
import { useState } from "react";
import OutlinedButtom from "../ui-components/OutlinedButton";
import Check from "../../images/check.svg";
import Cross from "../../images/cross.svg";

import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";

import TemporaryAcceptModal from "../ui-components/TemporaryAcceptModal";

export default function MoreInfo({ tutor, applied }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

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
    window.location.reload(true);
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
    window.location.reload(true);
  };

  const handleAccept = () => {
    setOpen(true);
  };

  return (
    <div className="more_info">
      <TemporaryAcceptModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      />
      <img
        alt="user"
        src="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <div className="posting_buttons">
        {applied === true && (
          <OutlinedButtom
            icon={Check}
            text="Like"
            green={true}
            click={handleLike}
          />
        )}
        {applied === true && (
          <OutlinedButtom
            icon={Cross}
            text="Reject"
            green={false}
            click={handleReject}
          />
        )}
        {applied === false && (
          <OutlinedButtom
            icon={Check}
            text="Send this tutor a message!"
            green={true}
            click={handleAccept}
          />
        )}
      </div>

      <div className="tutorinfo_content">
        <div className="tutorinfo_text">
          <h1>{`${tutor.firstname} ${tutor.lastname}`}</h1>

          <h2>📚 Education:</h2>
          <div className="sub_section">
            <p>
              <span>🎓 University:</span> {tutor.university}
            </p>
            <p className="second">
              <span>📖 Major:</span> {tutor.major}
            </p>
          </div>
          <div className="sub_section">
            <p className="extra_margin">
              <span>📓 Medium:</span> {tutor.medium}
            </p>
            <p className="second extra_margin">
              <span>✏️ Class:</span> {tutor.class}
            </p>
          </div>
          <hr />
          <div className="sub_section">
            <p>
              <span>👩‍🏫 Tutor's Gender:</span> {tutor.tutor_gender}
            </p>
            <p className="second">
              <span>💃 Online/In-person: </span>
              {tutor.online}
            </p>
          </div>

          <p>
            <span>📚 Subjects they are willing to teach:</span>{" "}
            {tutor.locations.join(", ")}
          </p>
          <p>
            <span>💸 Subjects they are willing to teach:</span>{" "}
            {tutor.max_salary} - {tutor.min_salary} tk
          </p>
          <hr />

          <p>
            <span>📍 Locations they are willing to commute to:</span>{" "}
            {tutor.locations.join(", ")}
          </p>
          <p>
            <span>🗓 How many days a week?:</span> {tutor.days} days/week
          </p>

          <hr />
          <p>
            <span>🎉 Bio:</span> {tutor.bio}
          </p>
          <p>
            <span>🗣 Extra Curricular Activities (ECAs):</span> {tutor.eca}
          </p>
          <p>
            <span>🏃‍♀️ Hobbies:</span> {tutor.hobbies}
          </p>
          <p>
            <span>👔 Previous Experience:</span> {tutor.experience}
          </p>
          <p>
            <span>➕ Additional Information:</span> {tutor.other}
          </p>
        </div>
      </div>
    </div>
  );
}
