import "./ApplyBox.scss";

import TagBox from "../ui-components/TagBox";
import Grid from "@mui/material/Grid";
import Button from "../ui-components/Button";

export default function ApplyBox(props) {
  return (
    <div className="apply_box">
      <Grid container>
        <Grid item sm={12} lg={4} className="user_img">
          <img alt="user" src={props.img} />
        </Grid>
        <Grid item sm={12} lg={8} className="content">
          <h1>{props.name} </h1>
          <h3>🏫 {props.school} <span>| Jun 25, 2022</span></h3>
          <div className="tags">
            <TagBox emoji="✏️" text="Class 8" />
            <TagBox emoji="💸" text={props.salary} />
            <TagBox emoji="📓" text="English Medium" />
            <TagBox emoji="📍" text="Dhanmondi" />
            <TagBox emoji="💃" text="In-person" />
          </div>
          <div className="text">
            <p>
              <span>Subjects:</span> {props.subjects}
            </p>
            <p>
              <span>Locations:</span> {props.locations}
            </p>
            <p>
              <span>Days:</span> {props.days} days/week
            </p>
            <p>
              <span>Preferred Gender:</span> Female
            </p>
            <p>
              <span>Student's Gender:</span> Male
            </p>
          </div>
          <Button text="Apply" />
        </Grid>
      </Grid>
    </div>
  );
}
