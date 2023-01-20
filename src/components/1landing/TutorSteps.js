import "./TutorSteps.scss";
import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import TutorImg from "../../images/landing/tutor_img.png";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export default function TutorSteps() {
  const { t } = useTranslation();
  return (
    <div className="tutor_steps">
      <h1>{t('Get started with TutorLab')}</h1>
      <h2 className="tutor_title">{t('How does tutoring work?')}</h2>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Carousel
            responsive={responsive}
            draggable={true}
            showDots={false}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="item_class"
          >
            <div className="text">
              <h1 className="title">{t('Step 1')}</h1>
              <p> {t('Signup and make your tutor profile - include all your information for a higher match rate')}</p>
            </div>
            <div className="text">
              <h1 className="title">{t('Step 2')}</h1>
              <p>{t('Go to the Apply to postings page and apply to the Tutoring positions you like')}</p>
            </div>
            <div className="text">
              <h1 className="title">{t('Step 3')}</h1>
              <p>{t('Wait for the parent to connect with you, after which you will get a SMS listing the details on how to contact the parent')}</p>
            </div>
            <div className="text">
              <h1 className="title">{t('Step 4')}</h1>
              <p>{t('After successfully matching, you can now set up your first class')}</p>
            </div>
          </Carousel>
        </Grid>
        <Grid item xs={12} md={6} className="image">
          <img src={TutorImg} />
          <hr/>
        </Grid>
      </Grid>
    </div>
  );
}
