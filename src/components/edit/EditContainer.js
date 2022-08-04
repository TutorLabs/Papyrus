import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../create/CreateContainer.scss";

import Picture from "../ui-components/Picture";
import FirstSection from "../create/FirstSection";
import SecondSection from "../create/SecondSection";
import Button from "../ui-components/Button";

import Grid from "@mui/material/Grid";
import Cookies from "universal-cookie";

export default function EditContainer() {
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
    tutor_gender: "",
    student_gender: "",
  });

  const { token } = useSelector((state) => state.auth);

  const cookies = new Cookies();
  const navigate = useNavigate();
  const params = useParams();

  const postid = params.id;

  useEffect(() => {
    const allDetails = async () => {
      // const response = await fetch(`/api/post/${postid}`);
      const response = await fetch(`/api/post/${postid}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      const data = json.post;
      setFormData(data);
    };
    allDetails();
  }, []);

  const handleSubmit = () => {
    fetch(`/api/post/${postid}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify(formData),
    }).then(() => {
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
      {<SecondSection formData={formData} setFormData={setFormData} />}
      <div className="button_container" onClick={handleSubmit}>
        <Button text="Edit" />
      </div>
    </div>
  );
}
