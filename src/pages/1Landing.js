import "./1Landing.scss";
import Banner from "../components/1landing/Banner";
import Carousel from "../components/1landing/MultiCarousel";
import SimpleSteps from "../components/1landing/SimpleSteps";
import WhyChooseUs from "../components/1landing/WhyChooseUs";
import BlueSection from "../components/1landing/BlueSection";
import MissAnything from "../components/1landing/MissAnything";

export default function Landing() {
  return (
    <div className="landing">
      <Banner />
      <Carousel />
      <SimpleSteps />
      <WhyChooseUs />
      <BlueSection />
      <MissAnything />
    </div>
  );
}
