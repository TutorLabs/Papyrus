import "./Banner.scss";
import Grid from "@mui/material/Grid";
import Typed from "react-typed";
import BannerImg from "../../images/banner.png";
export default function Banner() {
  return (
    <div className="banner">
      <Grid container>
        <Grid item xs={12} md={6} className="banner_text">
          <p className="title">
            Experience better <br /> <span>learning</span>
          </p>
          <p className="content">
            Say goodbye to struggling, and hello to success with the right tutor
            <br />
            Get help with{" "}
            <Typed
              loop
              strings={[
                "Math",
                "Physics",
                "Economics",
                "Chemistry",
                "Accounting",
                "Biology",
                "Business Studies",
              ]}
              typeSpeed={40}
              backSpeed={50}
              className="typist"
            />
          </p>
          <button
            className="button"
            onClick={() => window.open("https://mahzabin-rashid.com")}
          >
            Request invitation to waitlist
          </button>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="img_container">
            <img className="banner_img" src={BannerImg} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
