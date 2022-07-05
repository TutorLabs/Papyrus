import { useState, useEffect } from "react";
import "./AuthContainer.scss";

// redux imports
import { useDispatch } from "react-redux";
import { updateVerifyCode } from "../../redux/verifyCode";

// material-ui imports
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function SignInContainer() {
  const dispatch = useDispatch();

  let x = "log in"; // delete

  useEffect(() => {
    dispatch(updateVerifyCode(x)); // change x to whatever we want to pass
  }, []);

  // state management
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(number);
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
        <button>Sign In</button>
      </form>
    </div>
  );
}
