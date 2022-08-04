import "./TutorHome.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // for error demonstration
import { updateText } from "../redux/error"; // for error demonstration
import { Link } from "react-router-dom";
import Edit from "../images/home/tutoredit.svg";
import Support from "../images/home/support.svg";
import Header from "../components/layout/Header";
import ActionBox from "../components/home/ActionBox";
import PostingBox from "../components/home/PostingBox";

import Grid from "@mui/material/Grid";

import { useTranslation } from "react-i18next"; // for translation demonstration

export default function Home() {
  const dispatch = useDispatch(); // for error
  const { t } = useTranslation(); // for translation demonstration

  useEffect(() => {}, []);

  return (
    <div className="home">
      <Header title={t("Home")} subtitle="View information important to you" />
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
      <h2 className="sub_header">{t("Postings you have created")}:</h2>
      <hr />
    </div>
  );
}
