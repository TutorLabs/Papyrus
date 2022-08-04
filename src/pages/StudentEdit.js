import "./Create.scss";

import Header from "../components/layout/Header";
import StudentEditContainer from "../components/edit/StudentEditContainer";

export default function StudentEdit() {
  return (
    <div className="create">
      <Header title="Edit" subtitle="Edit your posting" />
      <StudentEditContainer/>
    </div>
  );
}
