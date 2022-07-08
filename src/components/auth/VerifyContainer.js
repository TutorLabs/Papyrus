import { useState } from "react";
import "./AuthContainer.scss";

// redux
import { useSelector } from "react-redux";

// material-ui imports
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Cookies from "universal-cookie";

export default function VerifyContainer() {
  const { code } = useSelector((state) => state.verifyCode);
  const { initial_info } = useSelector((state) => state.verifyCode)
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
  };
  const cookies = new Cookies();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(number);
    code
    .confirm(number)
    .then((result) => {
      const user = result.user
      // console.log(result)
      // console.log(user)
      fetch("/authenticate", {
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
          if (data && Object.keys(initial_info).length > 0) {
            console.log('done')
            fetch("/info", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "CSRF-Token": cookies.get("XSRF-TOKEN"),
              },
              body: JSON.stringify(initial_info),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Success:", data);
              })
          }
        })
    })
    .catch((error) => {
      console.log(error)
    })
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
