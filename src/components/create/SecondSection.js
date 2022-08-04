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
  "All",
  "Mathematics",
  "Biology",
  "Chemistry",
  "Physics",
  "English",
  "Bengali",
];

export default function SecondSection({ formData, setFormData }) {
  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };
  return (
    <div className="create_second_section">
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
            value={formData.school}
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
                value={formData.medium}
              >
                <MenuItem value={"English Medium (Cambridge)"}>
                  English Medium (Cambridge)
                </MenuItem>
                <MenuItem value={"English Medium (Edexcel)"}>
                  English Medium (Edexcel)
                </MenuItem>
                <MenuItem value={"English Version"}>English Version</MenuItem>
                <MenuItem value={"Bangla Medium"}>Bangla Medium</MenuItem>
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
            value={formData.class}
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
              <Select onChange={handleChange("online")} value={formData.online}>
                <MenuItem value={"Online"}>Online</MenuItem>
                <MenuItem value={"In-Person"}>In-person</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={12} lg={6} className="second_text_field">
          <div>
            <h2>Preferred Gender</h2>
            <FormControl
              className="form_control"
              required
              variant="outlined"
              fullWidth
            >
              <Select
                onChange={handleChange("tutor_gender")}
                value={formData.tutor_gender}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"None"}>None</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item sm={12} lg={6} className="second_text_field">
          <div className="second_section_left_margin">
            <h2>Student's Gender</h2>
            <FormControl
              className="form_control"
              required
              variant="outlined"
              fullWidth
            >
              <Select
                onChange={handleChange("student_gender")}
                value={formData.student_gender}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
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
        value={formData.location}
        required
      />

      <h2>How many days a week?</h2>
      <FormControl className="form_control" variant="outlined" fullWidth>
        <OutlinedInput
          type="number"
          value={formData.days}
          onChange={handleChange("days")}
          placeholder="Days"
          endAdornment={<InputAdornment position="end">/week</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>

      <h2>Which subjects do you want to learn?</h2>
      { <FormControl className="form_control" fullWidth>
        <Select
          labelId="demo-multiple-chip-label"
          multiple
          value={formData.subjects}
          onChange={handleChange("subjects")}
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
      </FormControl> }

      <h2>What is your preferred monthly salary?</h2>
      <Grid container>
        <Grid item sm={12} lg={6}>
          <FormControl className="form_control" variant="outlined" fullWidth>
            <OutlinedInput
              type="number"
              value={formData.max_salary}
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
            <FormControl className="form_control" variant="outlined" fullWidth>
              <OutlinedInput
                type="number"
                value={formData.min_salary}
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
    </div>
  );
}
