import "./1Landing.scss";
import Banner from "../components/1landing/Banner";
import Carousel from "../components/1landing/Universities";
import SimpleSteps from "../components/1landing/SimpleSteps";
import WhyChooseUs from "../components/1landing/WhyChooseUs";
import BlueSection from "../components/1landing/BlueSection";
import MissAnything from "../components/1landing/MissAnything";
import TutorSteps from "../components/1landing/TutorSteps";
import StudentSteps from "../components/1landing/StudentSteps";
import Questions from "../components/1landing/Questions";
export default function Landing() {
  return (
    <div className="landing">
      <Banner />
      <Carousel />
      <SimpleSteps />
      <WhyChooseUs />

      <TutorSteps />
      <StudentSteps />
      <BlueSection />
      <Questions />
      <MissAnything />
    </div>
  );
}
