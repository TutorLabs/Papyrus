import "./Universities.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Brac from "../../images/landing/brac.png";
import NorthSouth from "../../images/landing/north_south.png";
import BUET from "../../images/landing/buet.png";
import DU from "../../images/landing/dhaka_university.png";

import { useTranslation } from "react-i18next";
import EW from "../../images/landing/east_west.png";
import ULAB from "../../images/landing/ulab.png";
import IUB from "../../images/landing/independent.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MultiCarousel() {
  const { t } = useTranslation();
  return (
    <div className="multi_carousel">
      <p>{t("Connect with tutors from top universities")}</p>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2500}
        infinite={true}
        arrows={false}
        centerMode={true}
        draggable={true}
        containerClass="carousel"
        itemClass="carousel_item"
        shouldResetAutoplay={true}
      >
        <img src={BUET} alt="BUET logo" />
        <img src={DU} alt="DU logo" />
        <img src={NorthSouth} alt="NSU logo" />
        <img src={Brac} alt="BracU logo" />
        <img src={EW} alt="EWU logo" />
        <img src={ULAB} alt="ULAB logo" />
        <img src={IUB} alt="IUB logo" />
      </Carousel>
    </div>
  );
}
