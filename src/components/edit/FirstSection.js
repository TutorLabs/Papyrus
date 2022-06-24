import { useState } from "react";
import "./FirstSection.scss";

// material-ui imports
import TextField from "@mui/material/TextField";

export default function FirstTextField(props) {
  const [values, setValues] = useState({
    first_name: props.first_name,
    last_name: props.last_name,
    email: "m@g.com",
    phone_number: "6475721423",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div className="edit_first_section">
      <form onSubmit={handleSubmit}>
        <h2>First Name</h2>
        <TextField
          className="text_field"
          placeholder="First Name"
          variant="outlined"
          fullWidth
          value={values.first_name}
          onChange={handleChange("first_name")}
          required
        />
        <h2>Last Name</h2>
        <TextField
          className="text_field"
          placeholder="Last Name"
          variant="outlined"
          fullWidth
          value={values.last_name}
          onChange={handleChange("last_name")}
          required
        />
        <h2>Email</h2>
        <TextField
          className="text_field"
          placeholder="Email"
          variant="outlined"
          fullWidth
          value={values.email}
          onChange={handleChange("email")}
        />
        <h2>Phone Number</h2>
        <TextField
          className="text_field"
          placeholder="Phone Number"
          label=""
          variant="outlined"
          fullWidth
          value={values.phone_number}
          onChange={handleChange("phone_number")}
        />
      </form>
    </div>
  );
}
