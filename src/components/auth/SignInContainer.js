import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./AuthContainer.scss";

// redux imports
import { useDispatch } from "react-redux";
import { updateVerifyCode } from "../../redux/verifyCode";
import { updateRole } from "../../redux/auth";

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

  const navigate = useNavigate();

  // To offset invalid csrf token with inital post request
  useEffect(() => {
    const allDetails = async () => {
      const response = await fetch("/testapi");
      const json = await response.json();
    };
    allDetails();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      number: `+88${number}`,
    };
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
        if (data.exists === true) {
          generateRecaptcha();
          let appVerifier = window.recaptchaVerifier;
          signInWithPhoneNumber(authentication, number, appVerifier)
            .then((confirmationResult) => {
              dispatch(updateVerifyCode(confirmationResult));
              dispatch(updateRole(data.role));
              navigate("/verify");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          navigate("/signup");
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
            startAdornment={<InputAdornment position="start">+88</InputAdornment>}
            value={number}
            onChange={handleChange}
            required
          />
        </FormControl>
        <button id="sign-in">Sign In</button>
      </form>
      <h2>
        Don't have an account? <Link to="/signup">Sign up now!</Link>
      </h2>
    </div>
  );
}
