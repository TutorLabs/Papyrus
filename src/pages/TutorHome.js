import "./TutorHome.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Edit from "../images/home/tutoredit.svg";
import Support from "../images/home/support.svg";
import Header from "../components/layout/Header";
import ActionBox from "../components/home/ActionBox";
import Cover from "../components/home/Tutor/Cover";
import { useTranslation } from "react-i18next";

export default function TutorHome() {
  const { t } = useTranslation();

  useEffect(() => {}, []);

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
          <Link to="/tutoredit" className="home_action_box_link">
            <ActionBox img={Edit} title="Edit" subtitle="Edit your profile" />
          </Link>
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
