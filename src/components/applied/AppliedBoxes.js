import "./AppliedBoxes.scss";
import MoreInfo from "./MoreInfo";
import TutorList from "./TutorList";

export default function AppliedBoxes(props) {
  return (
    <div className="applied_boxes">
      <div className="applied_boxes_tutor_list">
        <TutorList />
      </div>
      <div className="applied_boxes_more_info">
        <MoreInfo />
      </div>
    </div>
  );
}
