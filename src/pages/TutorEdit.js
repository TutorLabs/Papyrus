import "./Create.scss";

import Header from "../components/layout/Header";
import TutorEditContainer from "../components/edit/StudentEditContainer";

export default function StudentEdit() {
  return (
    <div className="create">
      <Header title="Edit" subtitle="Edit your profile" />
      <TutorEditContainer/>
    </div>
  );
}
