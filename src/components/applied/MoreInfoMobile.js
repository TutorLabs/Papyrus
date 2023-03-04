import "./MoreInfo.scss";
import { useState } from "react";
import OutlinedButtom from "../ui-components/OutlinedButton";
import Check from "../../images/check.svg";

import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";

import TemporaryAcceptModal from "../ui-components/TemporaryAcceptModal";

export default function MoreInfo({ tutor }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const cookies = new Cookies();
  const params = useParams();

  const postid = params.id;
  const data = {
    tutor_id: tutor?._id,
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

  const handleAccept = () => {
    setOpen(true);
    const tutorid = {
      tutor_id: tutor._id,
    };
    fetch(`/api/connected/${postid}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify(tutorid),
    })
      .then((response) => response.json())
      .then((smsContent) => {
        const APIKEY = "bokMHdSKvyUvSbHXxZ64";
        const SenderID = "8809617611064";

        const StudentMessage = `TutorLab: Congratulations! You have been connected with a tutor.
      Student Name: ${smsContent.studentFullName} 
      Tutor Name: ${smsContent.tutorFullName}
      Tutor Phone Number: ${smsContent.tutorPhoneNumber}`;

        const TutorMessage = `TutorLab: Congratulations! You have been connected with a student.
      Student Name: ${smsContent.studentFullName} 
      Tutor Name: ${smsContent.tutorFullName}
      Student Phone Number: ${smsContent.studentPhoneNumber}`;

        console.log(smsContent.tutorPhoneNumber);
        console.log(smsContent);

        fetch(
          `https://bulksmsbd.net/api/smsapi?api_key=${APIKEY}&type=text&number=${smsContent.studentPhoneNumber}&senderid=${SenderID}&message=${StudentMessage}`
        )
          .then((response) => response.json())
          .then((data) => console.log(data));

        fetch(
          `https://bulksmsbd.net/api/smsapi?api_key=${APIKEY}&type=text&number=${smsContent.tutorPhoneNumber}&senderid=${SenderID}&message=${TutorMessage}`
        )
          .then((response) => response.json())
          .then((data) => console.log(data));
      });
  };

  return (
    <div className="more_info">
      <TemporaryAcceptModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      />
      <div className="posting_button">
        {
          <OutlinedButtom
            icon={Check}
            text="Send this tutor a message!"
            green={true}
            click={handleAccept}
          />
        }
      </div>

      <div className="tutorinfo_content">
        <div className="tutorinfo_text">
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
            {tutor.subjects.join(", ")}
          </p>
          <p>
            <span>💸 Preferred monthly salary range:</span> {tutor.min_salary} -{" "}
            {tutor.max_salary} tk
          </p>
          <p>
            <span>📚 Their results: </span>
            {tutor.result}
          </p>
          <hr />

          <p>
            <span>📍 Locations they are willing to commute to:</span>{" "}
            {tutor.locations}
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
