import "./EditContainer.scss";

import Picture from "./Picture";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Button from "../ui-components/Button";
import RedButton from "../ui-components/RedButton";

import Grid from "@mui/material/Grid";

// make get request
const data = {
  first_name: "Mahzabin",
  last_name: "Rashid Fariha",
  email: "m@g.com",
  phone_number: "6475721423",
  school: "",
  class: "",
  medium: "",
  online: "",
  location: "",
  subject: [],
  max_salary: "",
  min_salary: "",
};

export default function EditContainer() {
  return (
    <div className="edit_container">
      <h4>Basic Information</h4>
      <Grid container>
        <Grid item sm={12} lg={5}>
          <Picture />
        </Grid>
        <Grid item sm={12} lg={7} className="first_text_field">
          <FirstSection
            first_name={data.first_name}
            last_name={data.last_name}
          />
        </Grid>
      </Grid>
      <hr />
      <h4 className="advanced_info_margin">Advanced Information</h4>
      <SecondSection />

      <div className="button_container">
        <Button text="Edit" />
        <div className="delete">
          <RedButton text="Delete" />
        </div>
      </div>
    </div>
  );
}
