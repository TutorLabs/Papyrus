import "./Create.scss";

import Header from "../components/layout/Header";
import EditContainer from "../components/edit/EditContainer";

export default function Create() {
  return (
    <div className="create">
      <Header title="Edit" subtitle="Edit your posting" />
      <EditContainer/>
    </div>
  );
}
