import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../profile/ProfileContainer.scss";

import Picture from "../ui-components/Picture";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Button from "../ui-components/Button";

import Grid from "@mui/material/Grid";
import Cookies from "universal-cookie";

import { useSelector } from "react-redux";

export default function TutorEditContainer() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    photo: null,
    university: "",
    major: "",
    school: "",
    class: "",
    medium: "",
    online: "",
    bio: "",
    locations: [],
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
    const userPhoneNumber = async () => {
      const response = await fetch("/api/profileinfo", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      const data = json.data;
      setFormData({
        ...formData,
        phone_number: data.phone,
        first_name: data.firstname,
        last_name: data.lastname,
      });
    };
    userPhoneNumber();
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
        navigate("/apply");
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
          <Picture formData={formData} setFormData={setFormData} />
        </Grid>
      </Grid>
      <hr className="hr_margin" />
      <h4 className="advanced_info_margin">Advanced Information</h4>
      <SecondSection formData={formData} setFormData={setFormData} />
      <div className="button_container" onClick={handleSubmit}>
        <Button text="Edit" />
      </div>
    </div>
  );
}