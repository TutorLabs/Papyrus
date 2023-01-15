import "./MultiCarousel.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sunnydale from "../../images/landing/sunnydale.png";
import Mastermind from "../../images/landing/mastermind.png";
import Brac from "../../images/landing/brac.png";
import NorthSouth from "../../images/landing/north_south.png";
import Scholastica from "../../images/landing/scholastica.png";
import BUET from "../../images/landing/buet.png";
import DU from "../../images/landing/dhaka_university.png";
import MapleLeaf from "../../images/landing/maple_leaf.png";

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
  return (
    <div className="multi_carousel">
      <p>Connect with tutors from top universities</p>
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
        <img src={Sunnydale} />
        <img src={Mastermind} />
        <img src={MapleLeaf} />
        <img src={BUET} />
        <img src={DU} />
        <img src={NorthSouth} />
        <img src={Scholastica} />
        <img src={Brac} />
      </Carousel>
    </div>
  );
}
