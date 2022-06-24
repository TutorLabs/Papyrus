import { useState } from "react";
import "./SecondSection.scss";

// material-ui
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";

const subjects = [
  "Mathematics",
  "Biology",
  "Chemistry",
  "Physics",
  "English",
  "Bengali",
];

export default function SecondSection() {
  // state management
  const [values, setValues] = useState({
    school: "",
    class: "",
    medium: "",
    online: "",
    location: "",
    subject: [],
    max_salary: "",
    min_salary: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div className="edit_second_section">
      <form onSubmit={handleSubmit}>
        <h1>Education</h1>
        <Grid container>
          <Grid item sm={12} lg={6} className="second_text_field">
            <h2>School</h2>
            <TextField
              className="text_field"
              placeholder="School"
              variant="outlined"
              fullWidth
              onChange={handleChange("school")}
              value={values.school}
              required
            />
          </Grid>
          <Grid item sm={12} lg={6} className="second_text_field">
          <div className="second_section_left_margin">
            <h2>Medium</h2>
            <FormControl
              className="form_control"
              required
              variant="outlined"
              fullWidth
            >
              <Select
                labelId="demo-simple-select-outlined-label"
                onChange={handleChange("medium")}
                value={values.medium}
              >
                <MenuItem value={"english_medium"}>English Medium</MenuItem>
                <MenuItem value={"english_version"}>English Version</MenuItem>
                <MenuItem value={"bangla_medium"}>Bangla Medium</MenuItem>
              </Select>
            </FormControl>
            </div>
          </Grid>
          <Grid item sm={12} lg={6} className="second_text_field">
            <h2>Class</h2>
            <TextField
              className="text_field"
              placeholder="Class"
              variant="outlined"
              fullWidth
              onChange={handleChange("class")}
              value={values.class}
              required
            />
          </Grid>
          <Grid item sm={12} lg={6} className="second_text_field">
            <div className="second_section_left_margin">
              <h2>Online/In-person</h2>
              <FormControl
                className="form_control"
                required
                variant="outlined"
                fullWidth
              >
                <Select onChange={handleChange("online")} value={values.online}>
                  <MenuItem value={"online"}>Online</MenuItem>
                  <MenuItem value={"in_person"}>In-person</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>

        <h2>Location</h2>
        <TextField
          className="text_field"
          placeholder="Location"
          variant="outlined"
          fullWidth
          onChange={handleChange("location")}
          value={values.location}
          required
        />

        <h2>Which subjects do you want to learn?</h2>
        <FormControl className="form_control" fullWidth>
          <Select
            labelId="demo-multiple-chip-label"
            multiple
            value={values.subject}
            onChange={handleChange("subject")}
            input={<OutlinedInput />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {subjects.map((subject) => (
              <MenuItem key={subject} value={subject}>
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <h2>What is your preferred monthly salary?</h2>
        <Grid container>
          <Grid item sm={12} lg={6}>
            <FormControl className="form_control" variant="outlined" fullWidth>
              <OutlinedInput
                type="number"
                value={values.max_salary}
                onChange={handleChange("max_salary")}
                placeholder="Maximum"
                endAdornment={
                  <InputAdornment position="end">taka/month</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Grid>
          <Grid item sm={12} lg={6}>
          <div className="second_section_left_margin salary_space">
            <FormControl
              className="form_control"
              variant="outlined"
              fullWidth
            >
              <OutlinedInput
                type="number"
                value={values.min_salary}
                onChange={handleChange("min_salary")}
                placeholder="Minimum"
                endAdornment={
                  <InputAdornment position="end">taka/month</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
