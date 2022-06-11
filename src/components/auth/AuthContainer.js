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

export default function AuthContainer() {
  // state management
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    number: "",
    role: "tutor",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  // firebase auth

  return (
    <div className="auth_container">
      <h1>Register or Login below!</h1>
      <form onSubmit={handleSubmit}>
        <h2>First Name</h2>
        <TextField
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
            id="outlined-adornment-amount"
            placeholder="Mobile Number"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
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
          </RadioGroup>
        </FormControl>

        <button id="get-code">Get started</button>
      </form>
    </div>
  );
}
