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
  "Accounting",
  "Economics",
  "Geography",
  "History",
  "Business Studies",
  "ICT",
  "Agricultural Studies",
  "Sociology",
  "Psychology",
  "SAT",
  "IELTS",
  "University Admissions"
];

export default function SecondSection({ formData, setFormData }) {
  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  return (
    <div className="profile_second_section">
      <h1>Education</h1>
      <Grid container>
        <Grid item sm={12} lg={6} className="second_text_field">
          <h2>
            University{" "}
            <span>(Include Year or Write N/A if not in University)</span>
          </h2>
          <TextField
            className="text_field"
            placeholder="University"
            variant="outlined"
            fullWidth
            onChange={handleChange("university")}
            value={formData.university}
          />
        </Grid>
        <Grid item sm={12} lg={6} className="second_text_field">
          <div className="second_section_left_margin">
            <h2>
              Major
              <span> (Write N/A if not in Universit)</span>
            </h2>
            <TextField
              className="text_field"
              placeholder="Major"
              variant="outlined"
              fullWidth
              onChange={handleChange("major")}
              value={formData.major}
            />
          </div>
        </Grid>
        <Grid item sm={12} lg={6} className="second_text_field">
          <h2>
            School <span>(Write the name of the school you studied at)</span>
          </h2>
          <TextField
            className="text_field"
            placeholder="School"
            variant="outlined"
            fullWidth
            onChange={handleChange("school")}
            value={formData.school}
          />
        </Grid>
        <Grid item sm={12} lg={6} className="second_text_field">
          <div className="second_section_left_margin">
            <h2>Medium</h2>
            <FormControl className="form_control" variant="outlined" fullWidth>
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
          <h2>
            Class <span>(Write N/A if currently not in school)</span>
          </h2>
          <TextField
            className="text_field"
            placeholder="Class"
            variant="outlined"
            fullWidth
            onChange={handleChange("class")}
            value={formData.class}
          />
        </Grid>
        <Grid item sm={12} lg={6} className="second_text_field">
          <div className="second_section_left_margin">
            <h2>Online/In-person</h2>
            <FormControl className="form_control" variant="outlined" fullWidth>
              <Select onChange={handleChange("online")} value={formData.online}>
                <MenuItem value={"Online"}>Online</MenuItem>
                <MenuItem value={"In Person"}>In-person</MenuItem>
                <MenuItem value={"Okay with both in-person and online"}>
                  Okay with both in-person and online
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
      </Grid>

      <h2>Bio</h2>
      <TextField
        className="text_field"
        id="outlined-multiline-flexible"
        placeholder="Tell us about yourself..."
        fullWidth
        multiline
        rows={3}
        value={formData.bio}
        onChange={handleChange("bio")}
      />

      <h2>
        Results <span>(Ex: English (A*), Physics (95%))</span>
      </h2>
      <TextField
        className="text_field"
        id="outlined-multiline-flexible"
        placeholder="Write your results..."
        fullWidth
        multiline
        rows={3}
        value={formData.result}
        onChange={handleChange("result")}
      />

      <h2>Your Gender</h2>
      <FormControl className="form_control" variant="outlined" fullWidth>
        <Select
          onChange={handleChange("tutor_gender")}
          value={formData.tutor_gender}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>

      <h2>
        Which locations are you willing to commute to?{" "}
        <span>(Please include each separate location with a comma)</span>
      </h2>

      <TextField
        className="text_field"
        placeholder="Locations"
        variant="outlined"
        fullWidth
        onChange={handleChange("locations")}
        value={formData.locations}
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

      <h2>Which subjects are you willing to teach?</h2>
      <FormControl className="form_control" fullWidth>
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
      </FormControl>

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

      <h2>
        Extra Curricular Activities (ECAs) <span>(Optional)</span>
      </h2>
      <TextField
        className="text_field"
        id="outlined-multiline-flexible"
        placeholder="Elaborate on your ECAs..."
        fullWidth
        multiline
        rows={3}
        value={formData.eca}
        onChange={handleChange("eca")}
      />
      <h2>
        Hobbies <span>(Optional)</span>
      </h2>
      <TextField
        className="text_field"
        id="outlined-multiline-flexible"
        placeholder="Tell us more about what you do outside school..."
        fullWidth
        multiline
        rows={3}
        value={formData.hobbies}
        onChange={handleChange("hobbies")}
      />
      <h2>
        Previous Experience <span>(Optional)</span>
      </h2>
      <TextField
        className="text_field"
        id="outlined-multiline-flexible"
        placeholder="Elaborate on your expertise..."
        fullWidth
        multiline
        rows={3}
        value={formData.experience}
        onChange={handleChange("experience")}
      />
      <h2>Anything else you would like students to know?</h2>
      <TextField
        className="text_field"
        id="outlined-multiline-flexible"
        placeholder="Ex: If there’s a particular time of any day you cannot teach, mention it here..."
        fullWidth
        multiline
        rows={3}
        value={formData.other}
        onChange={handleChange("other")}
      />
    </div>
  );
}
