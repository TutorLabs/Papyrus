import "./TutorSteps.scss"; // same styling as TutorSteps
import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import StudentImg from "../../images/landing/student_img.png";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export default function StudentSteps() {
  return (
    <div className="tutor_steps student_steps">
      <h2>Want to Learn as a student?</h2>
      <Grid container>
        <Grid item xs={12} md={6} className="image">
          <img src={StudentImg} />
        </Grid>
        <Grid item xs={12} md={6} className="content">
          <Carousel
            responsive={responsive}
            draggable={true}
            showDots={false}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="item_class"
          >
            <div className="text">
              <h1 className="title">Step 1</h1>
              <p>
                Signup and make a posting for the kind of tutor you are looking
                for - include all your information for a higher match rate
              </p>
            </div>
            <div className="text">
              <h1 className="title">Step 2</h1>
              <p>Wait for tutors to apply to your posting</p>
            </div>
            <div className="text">
              <h1 className="title">Step 3</h1>
              <p>Select the tutor you like after looking at their profile</p>
            </div>
            <div className="text">
              <h1 className="title">Step 4</h1>
              <p>
                After successfully matching, a SMS is sent to you with the
                details on how to contact your tutor, after which you can set up
                your first class
              </p>
            </div>
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
}
