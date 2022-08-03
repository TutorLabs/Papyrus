import "./ApplyBox.scss";

import TagBox from "../ui-components/TagBox";
import Grid from "@mui/material/Grid";
import Button from "../ui-components/Button";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

export default function ApplyBox(props) {
  const cookies = new Cookies();
  const { token } = useSelector((state) => state.auth);
  const handleChange = () => {
    const data = {
      id: props.id,
    };

    fetch("/api/apply", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": cookies.get("XSRF-TOKEN"),
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };
  return (
    <div className="apply_box">
      <Grid container>
        <Grid item sm={12} lg={4} className="user_img">
          <img alt="user" src={props.img} />
        </Grid>
        <Grid item sm={12} lg={8} className="content">
          <h1>{props.name} </h1>
          <h3>
            🏫 {props.school} |<span> {props.date}</span>
          </h3>
          <div className="tags">
            <TagBox emoji="✏️" text={`Class ${props.class}`} />
            <TagBox
              emoji="💸"
              text={`${props.max_salary} - ${props.min_salary}`}
            />
            <TagBox emoji="📓" text={props.medium} />
            <TagBox emoji="📍" text={props.location} />
            <TagBox emoji="💃" text={props.presence} />
          </div>
          <div className="text">
            <p>
              <span>Subjects:</span> {props.subjects.join(", ")}
            </p>
            <p>
              <span>Days:</span> {props.days} days/week
            </p>
            <p>
              <span>Preferred Gender:</span> {props.preferred_gender}
            </p>
            <p>
              <span>Student's Gender:</span> {props.student_gender}
            </p>
          </div>
          <Button text="Apply" click={handleChange} />
        </Grid>
      </Grid>
    </div>
  );
}
