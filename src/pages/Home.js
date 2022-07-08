import "./Home.scss";

import Create from "../images/home/create.svg";
import Tutors from "../images/home/tutors.svg";
import Support from "../images/home/support.svg";
import Header from "../components/layout/Header";
import ActionBox from "../components/home/ActionBox";
import PostingBox from "../components/home/PostingBox";

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
        <ActionBox img={Support} title="Support" subtitle="Send us an email" />
      </div>
      <div className="home_posting_box">
        <PostingBox />
        <PostingBox />
        <PostingBox />
      </div>
    </div>
  );
}
