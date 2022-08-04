import { useState } from "react";
import { useNavigate } from "react-router";
import "./AuthContainer.scss";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateToken, updateRole, updateSignedIn } from "../../redux/auth";

// material-ui imports
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Cookies from "universal-cookie";

export default function VerifyContainer() {
  const { code } = useSelector((state) => state.verifyCode);
  const { role } = useSelector((state) => state.auth);
  const { initial_info } = useSelector((state) => state.verifyCode);
  const dispatch = useDispatch();
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
  };
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    code
      .confirm(number)
      .then((result) => {
        const user = result.user;
        fetch("/api/authenticate", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "CSRF-Token": cookies.get("XSRF-TOKEN"),
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            dispatch(updateToken(user.accessToken));
            if (Object.keys(initial_info).length > 0) {
              dispatch(updateRole(initial_info.role));
            }
            dispatch(updateSignedIn(true));
            if (data && Object.keys(initial_info).length > 0) {
              fetch("/api/register", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "CSRF-Token": cookies.get("XSRF-TOKEN"),
                },
                body: JSON.stringify(initial_info),
              }).then((response) => {
                if (initial_info.role == "student") {
                  navigate("/studenthome");
                } else {
                  navigate("/tutorhome");
                }
              });
            } else {
              if (role == "student") {
                navigate("/studenthome");
              } else {
                navigate("/tutorhome");
              }
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth_container">
      <h1>Verify</h1>
      <form onSubmit={handleSubmit}>
        <h2>Verification Code</h2>
        <p>Enter the 6 digit code sent to your mobile</p>
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            className="auth_text_field"
            id="outlined-adornment-amount"
            placeholder="Enter your code here"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            value={number}
            onChange={handleChange}
            required
          />
        </FormControl>
        <button>Verify</button>
      </form>
    </div>
  );
}
