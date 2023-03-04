import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./CreateContainer.scss";

import Picture from "../ui-components/Picture";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Button from "../ui-components/Button";

import Grid from "@mui/material/Grid";
import Cookies from "universal-cookie";

import { useSelector } from "react-redux";

export default function CreateContainer() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    photoUrl: "",
    school: "",
    class: "",
    medium: "",
    online: "",
    location: "",
    availability_days: "",
    subjects: [],
    max_salary: "",
    min_salary: "",
    preferred_gender: "",
    student_gender: "",
    other_info: "",
  });

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const userPhoneNumber = async () => {
      const response = await fetch("/api/phone", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      setFormData({
        ...formData,
        phone_number: json.phone,
        photoUrl: json.photoUrl,
      });
    };
    userPhoneNumber();
  }, []);

  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleSubmit = () => {
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
        navigate("/studenthome");
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
          <Picture formData={formData} role="student" />
        </Grid>
      </Grid>
      <hr className="hr_margin" />
      <h4 className="advanced_info_margin">Advanced Information</h4>
      <SecondSection formData={formData} setFormData={setFormData} />
      <div className="button_container">
        <Button text="Create" click={handleSubmit} />
      </div>
    </div>
  );
}
