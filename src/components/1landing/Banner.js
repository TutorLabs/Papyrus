import "./Banner.scss";
import Grid from "@mui/material/Grid";
import Typed from "react-typed";
import BannerImg from "../../images/landing/banner.png";
import { useTranslation } from "react-i18next";
export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className="banner">
      <Grid container>
        <Grid item xs={12} md={6} className="banner_text">
          <p className="title">
            {t('Experience better')}<br /> <span>{t('learning')}</span>
          </p>
          <p className="content">
            {t('Say Goodbye to struggling, and Hello to success with the right tutor')}
            <br />
            {t('Get help with')} {" "}
            <Typed
              loop
              strings={[
                `${t("Math")}`,
                `${t("Physics")}`,
                `${t('Economics')}`,
                `${t("Chemistry")}`,
                `${t("Accounting")}`,
                `${t("Biology")}`,
                `${t("English")}`,
              ]}
              typeSpeed={40}
              backSpeed={50}
              className="typist"
            />
          </p>
          <button
            className="button"
            onClick={() => window.open("https://forms.gle/LoVWjKzL8NkXQ2XJ6")}
          >
            {t('Join waitlist now!')}
          </button>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="img_container">
            <img className="banner_img" src={BannerImg} alt=""/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
