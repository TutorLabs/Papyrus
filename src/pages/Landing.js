import LandingBanner from "../components/landing/intro/LandingBanner";
import SimpleSteps from "../components/landing/simple-steps/SimpleSteps";
import Testimonials from "../components/landing/testimonials/testimonials"
import "./Landing.scss";

export default function Landing() {
  return (
    <div className="landing">
      <LandingBanner />
      <SimpleSteps/>
      <Testimonials/>
    </div>
  );
}
