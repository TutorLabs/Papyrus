import "./SimpleSteps.scss";
import Grid from "@mui/material/Grid";
import StepContainer from "./StepChild";

export default function SimpleSteps() {
  return (
    <div className="simple_steps">
      <h1>Make a start in 3 simple steps!</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <StepContainer
            num="1"
            title="Make a posting and view tutors"
            text="Find qualified tutors within your budget as they apply to your job posting"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <StepContainer
            num="2"
            title="Connect with your tutor"
            text="Select the best tutor from those who have applied and connect with them through our platform"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <StepContainer
            num="3"
            title="Start learning with  TutorLab!"
            text="Get the best learning experience from our tutors. Click here to get started!"
          />
        </Grid>
      </Grid>
    </div>
  );
}
