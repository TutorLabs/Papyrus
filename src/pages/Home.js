import "./Home.scss";
import { useDispatch } from "react-redux"; // for error demonstration
import { updateText } from "../redux/error"; // for error demonstration
import { Link } from "react-router-dom";
import Create from "../images/home/create.svg";
import Support from "../images/home/support.svg";
import Header from "../components/layout/Header";
import ActionBox from "../components/home/ActionBox";
import PostingBox from "../components/home/PostingBox";

import Grid from "@mui/material/Grid";

import { useTranslation } from "react-i18next"; // for translation demonstration

export default function Home() {
  const dispatch = useDispatch(); // for error demonstration
  const { t } = useTranslation(); // for translation demonstration
  return (
    <div className="home">
      <Header title={t("Home")} subtitle="View information important to you" />
      <div className="home_action_box">
        <Link to="/create" className="home_action_box_link">
          <ActionBox img={Create} title="Create" subtitle="Make a new post" />
        </Link>

        <a href="mailto:mahzabin@gmail.com" className="home_action_box_link">
          <ActionBox
            img={Support}
            title="Support"
            subtitle="Send us an email"
          />
        </a>
      </div>
      <h2 className="sub_header">{t("Postings you have created")}:</h2>
      <hr />

      <Grid container>
        <Grid item sm={12} lg={6}>
          <PostingBox />
        </Grid>
        <Grid item sm={12} lg={6}>
          <PostingBox />
        </Grid>
        <Grid item sm={12} lg={6}>
          <PostingBox />
        </Grid>
        <Grid item sm={12} lg={6}>
          <PostingBox />
        </Grid>
      </Grid>
      <p // for error demonstration
        onClick={() => {
          dispatch(updateText("Server failed to fetch data."));
        }}
      >
        click me for error
      </p>
    </div>
  );
}
