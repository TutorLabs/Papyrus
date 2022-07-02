import "./Postings.scss";

import Header from "../components/layout/Header";
import PostingsContainer from "../components/postings/PostingsContainer";

export default function Postings() {
  return (
    <div className="postings">
      <Header title="Postings" subtitle="Apply to postings here" />
      <PostingsContainer/>
    </div>
  );
}
