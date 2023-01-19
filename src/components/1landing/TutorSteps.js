import "./TutorSteps.scss";
import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import TutorImg from "../../images/landing/tutor_img.png";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export default function TutorSteps() {
  return (
    <div className="tutor_steps">
      <h1>Get started as a Tutor</h1>
      <Grid container>
        <Grid item xs={12} md={6} className="content">
          <Carousel
            responsive={responsive}
            draggable={true}
            showDots={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            
            itemClass="item_class"
          >
            <div className="text">
              <h1 className="title">Step 1</h1>
              <p>
                Signup and make your tutor profile - include all your
                information for a higher match rate
              </p>
            </div>
            <div className="text">
              <h1 className="title">Step 2</h1>
              <p>
                Go to the Apply to postings page and apply to the Tutoring
                positions you like
              </p>
            </div>
            <div className="text">
              <h1 className="title">Step 3</h1>
              <p>
                Wait for the parent to connect with you, after which you will
                get a SMS listing the details on how to contact the parent
              </p>
            </div>
            <div className="text">
              <h1 className="title">Step 4</h1>
              <p>
                After successfully matching, you can now set up your first class
              </p>
            </div>
          </Carousel>
        </Grid>
        <Grid item xs={12} md={6} className="image">
          <img src={TutorImg} />
        </Grid>
      </Grid>
    </div>
  );
}
