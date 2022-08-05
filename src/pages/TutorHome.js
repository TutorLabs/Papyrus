import "./TutorHome.scss";
import { useEffect, useState } from "react";
import Edit from "../images/home/tutoredit.svg";
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
  locations: [],
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

  console.log(tutor);

  const handleEdit = () => {
    navigate("/profile");
  };

  return (
    <div className="tutor_home">
      <Cover
        image="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        cover="https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <div className="tutor_home_content">
        <Header
          title={t("Home")}
          subtitle="View information important to you"
        />
        <div className="home_action_box">
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
        <div className="tutor_home_info">
          <h1>{`${tutor.firstname} ${tutor.lastname}`}</h1>

          <h2>Education:</h2>
          <hr />
          <p className="first_p">
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
            <span>Class:</span> {tutor.class}
          </p>
          <hr />
          <h2>
            Online/In-person: <span>{tutor.online}</span>
          </h2>
          <hr />
          <h2>
            Tutor's Gender: <span>{tutor.tutor_gender}</span>
          </h2>
          <hr />
          <h2>Bio:</h2>
          <p>{tutor.bio}</p>
          <hr />

          <h2>Locations they are willing to commute to:</h2>
          <p>{tutor.locations.join(", ")}</p>
          <hr />
          <h2>How many days a week?</h2>
          <p>{tutor.days}/week</p>
          <hr />
          <h2>Subjects they are willing to teach:</h2>
          <p>{tutor.subjects.join(", ")}</p>
          <hr />
          <h2>Preferred monthly salary:</h2>
          <p>
            {tutor.max_salary} - {tutor.min_salary} tk
          </p>
          <hr />
          <h2>Extra Curricular Activities (ECAs):</h2>
          <p>{tutor.eca}</p>
          <hr />
          <h2>Hobbies:</h2>
          <p>{tutor.hobbies}</p>
          <hr />
          <h2>Previous Experience:</h2>
          <p>{tutor.experience}</p>
          
        </div>
      </div>
    </div>
  );
}
