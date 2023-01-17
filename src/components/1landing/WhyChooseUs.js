import "./WhyChooseUs.scss";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faBolt,
  faForward,
  faRobot,
} from "@fortawesome/fontawesome-free-solid";
export default function WhyChooseUs(props) {
  return (
    <div className="why_choose_us">
      <h1>Why Choose Us</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={3}>
          <div className="content first">
            <div className="circle">
              <FontAwesomeIcon icon={faMoneyBill} />
            </div>
            <p className="title">0% Commission</p>
            <p>
              Tutors rejoice! We don’t keep your monthly salary. All of it goes
              to you.
              <br />
              <br />
              <br />
            </p>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="content second">
            <div className="circle">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <p className="title">Fast & Free Sign Up</p>
            <p>
              Register for free using only your phone number
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="content third">
            <div className="circle">
              <FontAwesomeIcon icon={faForward} />
            </div>
            <p className="title">Skilled Tutors</p>
            <p>
              Improve your education with the guidance of professional tutors
              <br />
              <br />
              <br />
            </p>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="content fourth">
            <div className="circle">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <p className="title">Fully Automated</p>
            <p>
              There is no need to contact us. Simply sign up, create a posting,
              wait for tutors to apply and connect with them!
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
