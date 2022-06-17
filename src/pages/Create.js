import "./Create.scss";

import Header from "../components/layout/Header";
import CreateContainer from "../components/create/CreateContainer";

export default function Create() {
  return (
    <div className="create">
      <Header title="Create" subtitle="Create a new posting for a student" />
      <CreateContainer/>
    </div>
  );
}
