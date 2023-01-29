import "./Filter.scss";

import TagBox from "../ui-components/TagBox";

export default function Filter() {
  // implement filter asap
  return (
    <div className="filter">
      <h4>Filter by:</h4>
      <TagBox emoji="✏️" text="Class" />
      <TagBox emoji="💸" text="Salary" />
      <TagBox emoji="📓" text="Medium" />
      <TagBox emoji="📍" text="Location" />
      <TagBox emoji="💃" text="In-person" />
      <TagBox emoji="💃" text="Online" />
    </div>
  );
}
