import "./1Landing.scss";
import BlueSection from "../components/1landing/BlueSection";
import Carousel from "../components/1landing/MultiCarousel";
import MissAnything from "../components/1landing/MissAnything";
import Banner from "../components/1landing/Banner";
import SimpleSteps from "../components/1landing/SimpleSteps";
export default function Landing() {
  return (
    <div className="landing">
      <Banner />
      <Carousel />
      <SimpleSteps/>
      <BlueSection />
      <MissAnything/>
    </div>
  );
}
