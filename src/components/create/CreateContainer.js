import "./CreateContainer.scss";

import Picture from "./Picture";
import FirstSection from "./FirstSection"
import SecondSection from "./SecondSection"

import Grid from '@mui/material/Grid';

export default function CreateContainer() {
  return (
    <div className="create_container">
        <h4>Basic Information</h4>
        <Grid container>
          <Grid item sm={12} lg={5}>
            <Picture/>
          </Grid>
          <Grid item sm={12} lg={7} className="first_text_field">
            <FirstSection/>
          </Grid>
        </Grid>
        <hr/>
        <h4 className="advanced_info_margin">Advanced Information</h4>
        <SecondSection/>
    </div>
  );
}
