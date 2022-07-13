import { useState } from "react";
import "./ProfileContainer.scss";

import Picture from "./Picture";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Button from "../ui-components/Button";

import Grid from "@mui/material/Grid";
import Cookies from "universal-cookie";

export default function ProfileContainer() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    university: "",
    major: "",
    school: "",
    class: "",
    medium: "",
    online: "",
    bio: "",
    location: [],
    days: "",
    subject: [],
    max_salary: "",
    min_salary: "",
    preferred_gender: "",
    tutor_gender: "",
    eca: "",
    hobbies: "",
    experience: "",
  });

  const cookies = new Cookies();

  const handleSubmit = () => {
    console.log(formData);
    fetch("/posting", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };

  return (
    <div className="profile_container">
      <h4>Basic Information</h4>
      <Grid container spacing={4}>
        <Grid item sm={12} lg={8} className="first_text_field">
          <FirstSection formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid item sm={12} lg={4}>
          <Picture />
        </Grid>
      </Grid>
      <hr className="hr_margin" />
      <h4 className="advanced_info_margin">Advanced Information</h4>
      <SecondSection formData={formData} setFormData={setFormData} />
      <div className="button_container" onClick={handleSubmit}>
        <Button text="Update" />
      </div>
    </div>
  );
}
