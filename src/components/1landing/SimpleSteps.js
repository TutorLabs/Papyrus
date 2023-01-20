import "./SimpleSteps.scss";
import Grid from "@mui/material/Grid";
import StepContainer from "./StepChild";
import { useTranslation } from "react-i18next";

export default function SimpleSteps() {
  const { t } = useTranslation();
  return (
    <div className="simple_steps">
      <h1>{t('Make a start in 3 simple steps!')}</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <StepContainer
            num={t("1")}
            title={t("Make a posting and view tutors")}
            text={t("Find qualified tutors within your budget as they apply to your job posting")}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <StepContainer
            num={t("2")} 
            title={t("Connect with your tutor")}
            text={t("Select the best tutor from those who have applied and connect with them through our platform")}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <StepContainer
            num={t("3")}
            title={t("Start learning with TutorLab!")}
            text={t("Get the best learning experience from our tutors")} //Click here to get started!"
          />
        </Grid>
      </Grid>
    </div>
  );
}
