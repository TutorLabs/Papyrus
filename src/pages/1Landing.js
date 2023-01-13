import "./1Landing.scss";
import BlueSection from "../components/1landing/BlueSection";
import Carousel from "../components/1landing/MultiCarousel";
import Banner from "../components/1landing/Banner";
import SimpleSteps from "../components/1landing/SimpleSteps";
export default function Landing() {
  return (
    <div className="landing">
      <div className="ridiculous"></div>
      <Banner />
      <Carousel />
      <SimpleSteps/>
      <BlueSection />
    </div>
  );
}
