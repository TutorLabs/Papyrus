import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./AuthContainer.scss";

// redux imports
import { useDispatch } from "react-redux";
import { updateVerifyCode, updateInitialInfo } from "../../redux/verifyCode";
import { updateText } from "../../redux/error";

// material-ui imports
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import Cookies from "universal-cookie";

import { authentication } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function SignUpContainer() {
  const dispatch = useDispatch();
  const cookies = new Cookies();

  // To offset invalid csrf token with inital post request
  useEffect(() => {
    const allDetails = async () => {
      const response = await fetch("/testapi");
      const json = await response.json();
    };
    allDetails();
  }, []);

  // state management
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    number: "",
    role: "student",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "get-code",
      {
        size: "invisible",
        callback: (response) => {},
      },
      authentication
    );
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // comment the next two lines out and uncomment the 3rd line to test without +88. Remove +88 from text and comment out type="number" on line 139 for testing.
    const countrycode = '+88'
    const phoneNumber = countrycode.concat(values.number)
    // const phoneNumber = values.number
    const data = {
      number: phoneNumber
    };
    let values_updated = values
    values_updated = {...values_updated, number: phoneNumber}
    fetch("/api/exists", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.exists === false) {
          generateRecaptcha();
          let appVerifier = window.recaptchaVerifier;
          signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
            .then((confirmationResult) => {
              dispatch(updateVerifyCode(confirmationResult));
              dispatch(updateInitialInfo(values_updated));
              navigate("/verify");
            })
            .catch((error) => {
              dispatch(updateText("Invalid phone number format."));
            });
        } else {
          dispatch(updateText("This phone number already exists."));
        }
      });
  };

  return (
    <div className="auth_container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <h2>First Name</h2>
        <TextField
          className="auth_text_field"
          required
          id="outlined-basic"
          placeholder="First Name"
          variant="outlined"
          fullWidth
          value={values.first_name}
          onChange={handleChange("first_name")}
        />

        <h2>Last Name</h2>
        <TextField
          className="auth_text_field"
          id="outlined-basic"
          placeholder="Last Name"
          variant="outlined"
          fullWidth
          value={values.last_name}
          onChange={handleChange("last_name")}
          required
        />

        <h2>Phone Number</h2>
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            className="auth_text_field"
            id="outlined-adornment-amount"
            placeholder="Mobile Number"
            startAdornment={
              <InputAdornment position="start">+88</InputAdornment>
            }
            value={values.number}
            type="number"
            onChange={handleChange("number")}
            required
          />
        </FormControl>

        <h2>Are you a tutor or a student?</h2>
        <FormControl variant="standard">
          <RadioGroup
            row
            aria-labelledby="demo-error-radios"
            value={values.role}
            onChange={handleChange("role")}
          >
            <FormControlLabel
              value="student"
              control={
                <Radio
                  sx={{
                    color: "#59C1A9",
                    "&.Mui-checked": {
                      color: "#59C1A9",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                  }}
                />
              }
              label="Student/Parent"
            />
            <FormControlLabel
              value="tutor"
              control={
                <Radio
                  sx={{
                    color: "#59C1A9",
                    "&.Mui-checked": {
                      color: "#59C1A9",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                    },
                  }}
                />
              }
              label="Tutor"
            />
          </RadioGroup>
        </FormControl>

        <button id="get-code">Sign Up</button>
      </form>
      <h2>
        Already have an account? <Link to="/signin">Sign in now!</Link>
      </h2>
    </div>
  );
}
