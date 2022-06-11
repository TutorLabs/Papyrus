import { useState } from "react";

// material-ui imports
import TextField from "@mui/material/TextField";

export default function Verify() {
  // state management
  const [code, setCode] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(code);
  };

  return (
    <div>
      <h1>Register or Login below!</h1>
      <form onSubmit={handleSubmit}>
        <h2>Verification Code</h2>
        <TextField
          id="outlined-name"
          label="Code"
          value={code}
          onChange={handleChange}
        />

        <button id="get-code">Verify</button>
      </form>
    </div>
  );
}
