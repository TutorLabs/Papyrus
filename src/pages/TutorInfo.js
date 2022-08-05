import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./TutorInfo.scss";

const initialTutor = {
  _id: "",
  firstname: "",
  lastname: "",
  university: "",
  major: "",
  school: "",
  medium: "",
  class: "",
  online: "",
  tutor_gender: "",
  bio: "",
  locations: [],
  days: "",
  subjects: [],
  max_salary: "",
  min_salary: "",
  eca: "",
  hobbies: "",
  experience: "",
};

export default function TutorInfo() {
  const [tutor, setTutor] = useState(initialTutor);
  const params = useParams();
  const postid = params.id;
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const allDetails = async () => {
      const response = await fetch(`/api/tutorinfo/${postid}`);
      const json = await response.json();
      setTutor(json.data);
    };
    allDetails();
  }, []);

  return (
    <div className="tutor_info">
      <div className="tutorinfo_box">
        <div className="tutorinfo_header">
          <div className="avatar">
            <img
              alt="avatar"
              src="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
          <div className="header_text">
            <h1>{`${tutor.firstname} ${tutor.lastname}`}</h1>
            <h3>🏫 {tutor.school}</h3>
          </div>
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
                <span>👩‍🏫 Tutor's Gender:</span> {tutor.gender}
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
    </div>
  );
}
