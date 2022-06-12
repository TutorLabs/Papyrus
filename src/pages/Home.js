import "./Home.scss";

import Create from "../images/create_posting.svg";

import Header from "../components/layout/Header";
import ActionBox from "../components/home/ActionBox";

export default function Home() {
  return (
    <div className="home">
      <Header title="Home" subtitle="View information important to you" />
      <div className="home_action_box">
      <ActionBox img={Create} title="Posting" subtitle="Make a new posting"/>
      <ActionBox img={Create} title="Props" subtitle="I'm passing props ok"/>
      </div>
     
      
    </div>
  );
}
