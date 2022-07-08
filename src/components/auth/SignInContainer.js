import { useState } from "react";
import { useNavigate } from "react-router";
import "./AuthContainer.scss";

// redux imports
import { useDispatch } from "react-redux";
import { updateVerifyCode } from "../../redux/verifyCode";

// material-ui imports
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

import Cookies from "universal-cookie";

import { authentication } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function SignInContainer() {
  const dispatch = useDispatch();
  const cookies = new Cookies();

  // state management
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
  };

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in",
      {
        size: "invisible",
        callback: (response) => {},
      },
      authentication
    );
  };

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      number: number
    }
    fetch("/exists", {
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
      if (data === true) {
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, number, appVerifier)
          .then((confirmationResult) => {
            dispatch(updateVerifyCode(confirmationResult))
            navigate('/verify')
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        navigate('/signup')
      }
    });
  };

  return (
    <div className="auth_container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <h2>Phone Number</h2>
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            className="auth_text_field"
            id="outlined-adornment-amount"
            placeholder="Mobile Number"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={number}
            onChange={handleChange}
            required
          />
        </FormControl>
        <button id="sign-in">Sign In</button>
      </form>
    </div>
  );
}
