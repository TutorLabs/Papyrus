import "./TutorHome.scss";
import { useEffect, useState } from "react";
import Edit from "../images/home/tutoredit.svg";
import Apply from "../images/home/pointer.svg";
import Support from "../images/home/support.svg";
import Header from "../components/layout/Header";
import ActionBox from "../components/home/ActionBox";
import Cover from "../components/home/Tutor/Cover";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
  locations: "",
  days: "",
  subjects: [],
  max_salary: "",
  min_salary: "",
  eca: "",
  hobbies: "",
  experience: "",
};
export default function TutorHome() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [tutor, setTutor] = useState(initialTutor);

  useEffect(() => {
    const userInfo = async () => {
      const response = await fetch("/api/profileinfo", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      const data = json.tutorInfo;
      setTutor(data);
    };
    userInfo();
  }, []);

  const handleEdit = () => {
    navigate("/profile");
  };

  const handleApply = () => {
    navigate("/apply");
  };

  return (
    <div className="tutor_home">
      <Cover
        image={tutor.photoUrl}
        cover="https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <div className="tutor_home_content">
        <Header
          title={t("Home")}
          subtitle="View information important to you"
        />
        <div className="home_action_box">
          <div className="home_action_box_link">
            <div onClick={handleApply}>
              <ActionBox
                img={Apply}
                title="Apply"
                subtitle="Apply to postings"
              />
            </div>
          </div>
          <div className="home_action_box_link">
            <div onClick={handleEdit}>
              <ActionBox img={Edit} title="Edit" subtitle="Edit your profile" />
            </div>
          </div>
          <a href="mailto:hello@tutorlab.io" className="home_action_box_link">
            <ActionBox
              img={Support}
              title="Support"
              subtitle="Send us an email"
            />
          </a>
        </div>
        <h2 className="sub_header">{t("View your Information")}:</h2>
        <hr />
        <div className="tutor_info">
          <div className="tutorinfo_box">
            <div className="tutorinfo_header">
              <div className="header_text">
                <h1>{`${tutor.firstname} ${tutor.lastname}`}</h1>
                <h3>🏫 {tutor.school}</h3>
              </div>
            </div>

            <div className="tutorinfo_content">
              <div className="tutorinfo_text">
                <h2>📚 Education: </h2>
                <div className="sub_section">
                  <p>
                    <span>🎓 University: </span> {tutor.university}
                  </p>
                  <p className="second">
                    <span>📖 Major: </span> {tutor.major}
                  </p>
                </div>
                <div className="sub_section">
                  <p className="extra_margin">
                    <span>📓 Medium: </span> {tutor.medium}
                  </p>
                  <p className="second extra_margin">
                    <span>✏️ Class: </span> {tutor.class}
                  </p>
                </div>
                <hr />
                <div className="sub_section">
                  <p>
                    <span>👩‍🏫 Tutor's Gender: </span> {tutor.tutor_gender}
                  </p>
                  <p className="second">
                    <span>💃 Online/In-person: </span>
                    {tutor.online}
                  </p>
                </div>

                <p>
                  <span>📚 Subjects they are willing to teach: </span>{" "}
                  {tutor.subjects.join(", ")}
                </p>
                <p>
                  <span>💸 Preferred monthly salary range: </span>{" "}
                  {tutor.min_salary} - {tutor.max_salary} tk
                </p>
                <p>
                  <span>📚 Your results: </span>
                  {tutor.result}
                </p>
                <hr />

                <p>
                  <span>📍 Locations they are willing to commute to: </span>{" "}
                  {tutor.locations}
                </p>
                <p>
                  <span>🗓 How many days a week?: </span> {tutor.days} days/week
                </p>

                <hr />
                <p>
                  <span>🎉 Bio: </span> {tutor.bio}
                </p>
                <p>
                  <span>🗣 Extra Curricular Activities (ECAs): </span> {tutor.eca}
                </p>
                <p>
                  <span>🏃‍♀️ Hobbies: </span> {tutor.hobbies}
                </p>
                <p>
                  <span>👔 Previous Experience: </span> {tutor.experience}
                </p>
                <p>
                  <span>➕ Additional Information: </span> {tutor.other}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
