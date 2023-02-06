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
import { updateText } from "../../redux/error";

export default function SignInContainer() {
  const dispatch = useDispatch();
  const cookies = new Cookies();

  // state management
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

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
      const response = await fetch("/api/testapi");
      const json = await response.json();
    };
    allDetails();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    // comment the next two lines out and uncomment the 3rd line to test without +88. Remove +88 from text and comment out type="number" on line 107 for testing.
    // const countrycode = "+88";
    // const phoneNumber = countrycode.concat(number);
    const phoneNumber = number;
    const data = {
      number: phoneNumber,
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
          signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
            .then((confirmationResult) => {
              dispatch(updateVerifyCode(confirmationResult));
              dispatch(updateRole(data.role));
              navigate("/verify");
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            });
        } else {
          dispatch(updateText("This phone number does not exist."));
          setLoading(false);
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
            startAdornment={
              <InputAdornment position="start">+88</InputAdornment>
            }
            value={number}
            // type="number"
            onChange={handleChange}
            required
          />
        </FormControl>
        <button id="sign-in">{loading ? "Loading..." : "Sign In"}</button>
      </form>
      <h2>
        Don't have an account? <Link to="/signup">Sign up now!</Link>
      </h2>
    </div>
  );
}
