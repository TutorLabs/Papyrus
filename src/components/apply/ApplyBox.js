import "./ApplyBox.scss";

import TagBox from "../ui-components/TagBox";
import Grid from "@mui/material/Grid";
import Button from "../ui-components/Button";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux"; // for snackbar demonstration
import { updateText } from "../../redux/snackbar"; // for snackbar demonstration

export default function ApplyBox(props) {
  const dispatch = useDispatch(); // for snackbar demonstration
  const cookies = new Cookies();
  const { token } = useSelector((state) => state.auth);

  const handleChange = () => {
    dispatch(updateText("Successfully applied to this posting!"));
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
    }).then((response) => {
      response.json();
      // dispatch(updateText("Successfully applied to this posting!"));
    });
  };
  return (
    <div className="apply_box">
      <Grid container>
        <Grid item sm={12} lg={3} className="user_img">
          <img alt="user" src={props.img} />
        </Grid>
        <Grid item sm={12} lg={9} className="content">
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
            <TagBox emoji="💃" text={props.online} />
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
          {!props.applied && <Button text="Apply" click={handleChange} />}
        </Grid>
      </Grid>
    </div>
  );
}
