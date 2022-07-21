import "./Home.scss";
import { useDispatch } from "react-redux"; // for error demonstration
import { updateText } from "../redux/error"; // for error demonstration
import Create from "../images/home/create.svg";
import Tutors from "../images/home/tutors.svg";
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
        <ActionBox img={Create} title="Create" subtitle="Make a new post" />
        <ActionBox
          img={Tutors}
          title="Tutors"
          subtitle="View more Tutor profiles"
        />
        <ActionBox img={Support} title="Support" subtitle="Send us an email" />
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
