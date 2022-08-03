import { useState } from "react";
import { useNavigate } from "react-router";
import "./CreateContainer.scss";

import Picture from "../ui-components/Picture";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Button from "../ui-components/Button";

import Grid from "@mui/material/Grid";
import Cookies from "universal-cookie";

export default function CreateContainer() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    photo: null,
    school: "",
    class: "",
    medium: "",
    online: "",
    location: "",
    days: "",
    subjects: [],
    max_salary: "",
    min_salary: "",
    preferred_gender: "",
    student_gender: "",
  });

  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(formData);
    fetch("/api/posting", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        navigate("/home");
      });
  };

  return (
    <div className="create_container">
      <h4>Basic Information</h4>
      <Grid container spacing={4}>
        <Grid item sm={12} lg={8} className="first_text_field">
          <FirstSection formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid item sm={12} lg={4}>
          <Picture formData={formData} setFormData={setFormData} />
        </Grid>
      </Grid>
      <hr className="hr_margin" />
      <h4 className="advanced_info_margin">Advanced Information</h4>
      <SecondSection formData={formData} setFormData={setFormData} />
      <div className="button_container" onClick={handleSubmit}>
        <Button text="Create" />
      </div>
    </div>
  );
}
