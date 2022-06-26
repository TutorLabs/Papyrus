import { useState } from "react";
import "./CreateContainer.scss";

import Picture from "./Picture";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Button from "../ui-components/Button";

import Grid from "@mui/material/Grid";

export default function CreateContainer() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    school: "",
    class: "",
    medium: "",
    online: "",
    location: "",
    days: "",
    subject: [],
    max_salary: "",
    min_salary: "",
    preferred_gender: "",
    student_gender: "",
  });

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="create_container">
      <h4>Basic Information</h4>
      <Grid container spacing={4}>
        <Grid item sm={12} lg={8} className="first_text_field">
          <FirstSection formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid item sm={12} lg={4}>
          <Picture />
        </Grid>
      </Grid>
      <hr className="hr_margin"/>
      <h4 className="advanced_info_margin">Advanced Information</h4>
      <SecondSection formData={formData} setFormData={setFormData} />
      <div className="button_container" onClick={handleSubmit}>
        <Button text="Create" />
      </div>
    </div>
  );
}
