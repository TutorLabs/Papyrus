import "./Apply.scss";

import Header from "../components/layout/Header";
import ApplyContainer from "../components/apply/ApplyContainer";

export default function Apply() {
  return (
    <div className="apply">
      <Header title="Apply" subtitle="Apply to postings which suit you" />
      <ApplyContainer />
    </div>
  );
}
