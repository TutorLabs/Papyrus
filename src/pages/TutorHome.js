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

export default function TutorHome() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [user, setUser] = useState({})

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
      setUser(data);
    };
    userInfo();
  }, []);

  console.log(user)

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
      </div>
    </div>
  );
}
