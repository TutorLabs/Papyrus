import "./WhyChooseUs.scss";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faBolt,
  faForward,
  faRobot,
} from "@fortawesome/fontawesome-free-solid";

import { useTranslation } from "react-i18next";

export default function WhyChooseUs(props) {
  const { t } = useTranslation();
  return (
    <div className="why_choose_us">
      <h1>{t("Why Choose TutorLab")}</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={3}>
          <div className="content first">
            <div className="circle">
              <FontAwesomeIcon icon={faMoneyBill} />
            </div>
            <p className="title">{t("Tutors Earn More!")}</p>
            <p>
              {t(
                "You get to keep more of your hard earned money. We only charge a small 500tk fee no matter your salary"
              )}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="content second">
            <div className="circle">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <p className="title">{t("Fast & Free Sign Up")}</p>
            <p>{t("Register for free using only your phone number")}</p>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="content third">
            <div className="circle">
              <FontAwesomeIcon icon={faForward} />
            </div>
            <p className="title">{t("Skilled Tutors")}</p>
            <p>
              {t(
                "Improve your education with the guidance of professional tutors"
              )}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="content fourth">
            <div className="circle">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <p className="title">{t("Fully Automated")}</p>
            <p>
              {t(
                "There is no need to contact us. Simply sign up, create a posting, wait for tutors to apply and connect with them!"
              )}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
