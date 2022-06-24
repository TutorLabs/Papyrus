import "./Edit.scss";

import Header from "../components/layout/Header";
import EditContainer from "../components/edit/EditContainer";

export default function Edit() {
  return (
    <div className="edit">
      <Header title="Edit" subtitle="Edit your posting here" />
      <EditContainer/>
    </div>
  );
}
