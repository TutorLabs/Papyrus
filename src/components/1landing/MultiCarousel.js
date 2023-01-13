import "./MultiCarousel.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sunnydale from "../../images/landing/sunnydale.png";

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
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2500}
        infinite={true}
        arrows={false}
        centerMode={true}
        draggable={true}
        containerClass="carousel"
        shouldResetAutoplay={true}
      >
        <img src={Sunnydale} />
        <img src={Sunnydale} />
        <img src={Sunnydale} />
        <img src={Sunnydale} />
      </Carousel>
    </div>
  );
}
