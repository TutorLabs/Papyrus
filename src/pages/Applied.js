import "./Applied.scss";

import Header from "../components/layout/Header";
import AppliedContainer from "../components/applied/AppliedContainer";

export default function Applied() {
  return (
    <div className="applied">
      <Header title="Applied" subtitle="See tutors who applied to your posting" />
      <AppliedContainer/>
    </div>
  );
}
