import "./Filter.scss";

import TagBox from "../ui-components/TagBox";

export default function Filter() {
  return (
    <div className="filter">
      <h4>Filter by:</h4>
      <TagBox emoji="✏️" text="Class 8" />
      <TagBox emoji="💸" text="Salary" />
      <TagBox emoji="📓" text="English Medium" />
      <TagBox emoji="📍" text="Dhanmondi" />
      <TagBox emoji="💃" text="In-person" />
    </div>
  );
}
