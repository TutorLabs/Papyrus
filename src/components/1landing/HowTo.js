import "./HowTo.scss";
import Grid from "@mui/material/Grid";

import { useTranslation } from "react-i18next";

export default function HowTo() {
  const { t } = useTranslation();
  return (
    <div className="how_to">
      <h1>Tutorial Videos on how to join TutorLab</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <iframe
            className="video"
            src="https://www.youtube.com/embed/EqQxq05cWY4"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
            allowFullScreen
          ></iframe>
        </Grid>
        <Grid item xs={12} lg={6}>
          <iframe
            className="video"
            src="https://www.youtube.com/embed/Jr3M4olet4U"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
            allowFullScreen
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
}
