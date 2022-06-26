import { useState } from "react";
import "./AuthContainer.scss";

// material-ui imports
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import { authentication } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Cookies from 'universal-cookie';

export default function AuthContainer() {
  // state management
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    number: "",
    role: "student",
  });
  // Will move to verify code
  const [code, setCode] = useState("");

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

  const cookies = new Cookies();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, values.number, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        fetch('/info', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "CSRF-Token": cookies.get("XSRF-TOKEN")
          },
          body: JSON.stringify(values),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        //window.location.href = "./verify"
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Will move to verify code
  const handleChange2 = (event) => {
    event.preventDefault();
    setCode(event.target.value);
  };
  // Will move to verify code
  const handleSubmit2 = (event) => {
    event.preventDefault();
    console.log(code);
    console.log(code.length);
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {});
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
              <InputAdornment position="start"></InputAdornment>
            }
            value={values.number}
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
    </div>
  );
}
/*
<form onSubmit={handleSubmit2}>
        <h2>Verification Code</h2>
        <TextField
          id="outlined-name"
          label="Code"
          value={code}
          onChange={handleChange2}
        />

        <button id="get-otp">Verify</button>
      </form>
*/
