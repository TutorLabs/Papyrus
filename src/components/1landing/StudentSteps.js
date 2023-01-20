import "./TutorSteps.scss"; // same styling as TutorSteps
import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import StudentImg from "../../images/landing/student_img.png";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export default function StudentSteps() {
  const { t } = useTranslation();
  return (
    <div className="tutor_steps student_steps">
      <Grid container>
        <Grid item xs={12} md={6} className="image student_img">
          <img src={StudentImg} />
        </Grid>
        <Grid item xs={12} md={6}>
          <h2 className="student_title">{t('Want to learn as a student?')}</h2>
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
              <h1 className="title">{t('Step 1')}</h1>
              <p>{t('Signup and make a posting for the kind of tutor you are looking for - include all your information for a higher match rate')}</p>
            </div>
            <div className="text">
              <h1 className="title">{t('Step 2')}</h1>
              <p>{t('Wait for tutors to apply to your posting')}</p>
            </div>
            <div className="text">
              <h1 className="title">{t('Step 3')}</h1>
              <p>{t('Select the tutor you like after looking at their profile')}</p>
            </div>
            <div className="text">
              <h1 className="title">{t('Step 4')}</h1>
              <p>{t('After successfully matching, a SMS is sent to you with the details on how to contact your tutor, after which you can set up your first class')}
              </p>
            </div>
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
}
