import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./ProfileContainer.scss";

import Picture from "../ui-components/Picture";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Button from "../ui-components/Button";

import Grid from "@mui/material/Grid";
import Cookies from "universal-cookie";

import { useSelector } from "react-redux";

export default function ProfileContainer() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    photoUrl: "",
    university: "",
    major: "",
    school: "",
    class: "",
    medium: "",
    online: "",
    bio: "",
    locations: "",
    days: "",
    subjects: [],
    max_salary: "",
    min_salary: "",
    tutor_gender: "",
    eca: "",
    hobbies: "",
    experience: "",
    other: "",
  });

  const cookies = new Cookies();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const userInfo = async () => {
      const response = await fetch("/api/profileinfo", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      const data = json.tutorInfo;
      setFormData(data);
    };
    userInfo();
  }, []);

  const handleSubmit = () => {
    fetch("/api/profile", {
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
        navigate("/tutorhome");
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
          <Picture formData={formData} role="tutor" />
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
