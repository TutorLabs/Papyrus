import "./TutorList.scss";

import Header from "../components/layout/Header";
import TutorListContainer from "../components/tutor-list/TutorListContainer";

export default function TutorList() {
  return (
    <div className="tutor_list">
      <Header title="Tutor List" subtitle="View and like tutors" />
      <TutorListContainer/>
    </div>
  );
}
