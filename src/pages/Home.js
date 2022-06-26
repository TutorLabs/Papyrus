import "./Home.scss";

import Create from "../images/home/create.svg";
import Tutors from "../images/home/tutors.svg";

import Header from "../components/layout/Header";
import ActionBox from "../components/home/ActionBox";

export default function Home() {
  return (
    <div className="home">
      <Header title="Home" subtitle="View information important to you" />
      <div className="home_action_box">
        <ActionBox img={Create} title="Create" subtitle="Make a new post" />
        <ActionBox
          img={Tutors}
          title="Tutors"
          subtitle="View more Tutor profiles"
        />
        <ActionBox
          img={Create}
          title="Your Posts"
          subtitle="Postings you have made"
        />
      </div>
    </div>
  );
}
