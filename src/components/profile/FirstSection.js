import "./FirstSection.scss";

// material-ui imports
import TextField from "@mui/material/TextField";

export default function FirstTextField({ formData, setFormData }) {
  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  return (
    <div className="profile_first_section">
      <h2>First Name</h2>
      <TextField
        disabled
        className="text_field"
        placeholder="First Name"
        variant="outlined"
        fullWidth
        value={formData.first_name}
        onChange={handleChange("first_name")}
        required
      />
      <h2>Last Name</h2>
      <TextField
        disabled
        className="text_field"
        placeholder="Last Name"
        variant="outlined"
        fullWidth
        value={formData.last_name}
        onChange={handleChange("last_name")}
        required
      />
      <h2>Email</h2>
      <TextField
        className="text_field"
        placeholder="Email"
        variant="outlined"
        fullWidth
        value={formData.email}
        onChange={handleChange("email")}
      />
      <h2>Phone Number</h2>
      <TextField
        disabled
        className="text_field"
        placeholder="Phone Number"
        label=""
        variant="outlined"
        fullWidth
        value={formData.phone_number}
        onChange={handleChange("phone_number")}
      />
    </div>
  );
}
