import { useState } from "react";
import "./AuthContainer.scss";

// material-ui imports
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function VerifyContainer() {
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
      <h1>Verify</h1>
      <form onSubmit={handleSubmit}>
        <h2>Verification Code</h2>
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
        <button>Verify</button>
      </form>
    </div>
  );
}
