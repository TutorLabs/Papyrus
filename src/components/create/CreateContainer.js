import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { updateTitle, updateText } from "../../redux/error";
import { useDispatch } from "react-redux";
import "./CreateContainer.scss";

import Picture from "../ui-components/Picture";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Button from "../ui-components/Button";

import Grid from "@mui/material/Grid";
import Cookies from "universal-cookie";

import { useSelector } from "react-redux";

export default function CreateContainer() {
  const dispatch = useDispatch();
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
    tutor_gender: "",
    student_gender: "",
    other: "",
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
    // dispatch(updateTitle("Please fill in all required fields")); // remove
    // form validation
    if (!formData.firstname) {
      dispatch(updateText("Enter student's first name."));
      return;
    }
    if (!formData.lastname) {
      dispatch(updateText("Enter student's last name."));
      return;
    }
    if (!formData.school) {
      dispatch(updateText("Enter student's school."));
      return;
    }
    if (!formData.medium) {
      dispatch(updateText("Enter student's medium."));
      return;
    }
    if (!formData.class) {
      dispatch(updateText("Enter student's class."));
      return;
    }
    if (!formData.online) {
      dispatch(
        updateText(
          "Specify if you prefer tutoring online, in-person, hybrid, or have no preference."
        )
      );
      return;
    }
    if (!formData.tutor_gender) {
      dispatch(
        updateText("Enter student's preferred gender for a tutor, if any.")
      );
      return;
    }
    if (!formData.student_gender) {
      dispatch(updateText("Enter student's gender."));
      return;
    }
    if (!formData.location) {
      dispatch(
        updateText(
          "Enter student's residential location or N/A if you prefer online tutoring."
        )
      );
      return;
    }
    // if (!formData.availability_days) {
    //   dispatch(
    //     updateText("Specify how many days you want the tutor to teach.")
    //   );
    //   return;
    // }
    if (!formData.subjects) {
      dispatch(
        updateText("Specify which subjects the student wants to learn.")
      );
      return;
    }
    // if (!formData.max_salary) {
    //   dispatch(updateText("Specify your maximum salary limit."));
    //   return;
    // }
    // if (!formData.min_salary) {
    //   dispatch(updateText("Specify your minimum salary limit."));
    //   return;
    // }
    console.log(formData);
    // fetch("/api/posting", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "CSRF-Token": cookies.get("XSRF-TOKEN"),
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => {
    //     response.json();
    //   })
    //   .then((data) => {
    //     navigate("/studenthome");
    //   });
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
