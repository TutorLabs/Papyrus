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
          <h3>🏫 {props.school}</h3>
          <div className="tags">
            <TagBox emoji="✏️" text="Class 8" />
            <TagBox emoji="💸" text="6,000-15,000" />
            <TagBox emoji="📓" text="English" />
            <TagBox emoji="📍" text="Dhanmondi" />
          </div>
          <div className="text">
            <p>
              <span>Subjects:</span> {props.subjects}
            </p>
            <p>
              <span>Locations:</span> {props.locations}
            </p>
            <p>
              <span>Salary Range:</span> {props.salary}
              Tk/month
            </p>
          </div>
          <Button text="Apply" />
        </Grid>
      </Grid>
    </div>
  );
}
