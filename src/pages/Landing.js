import LandingBanner from "../components/landing/intro/LandingBanner";
import SimpleSteps from "../components/landing/simple-steps/SimpleSteps";
import "./Landing.scss";

export default function Landing() {
  return (
    <div className="landing">
      <LandingBanner />
      <SimpleSteps/>
     
    </div>
  );
}
