import "./AppliedBoxes.scss";
import MoreInfo from "./MoreInfo";
import TutorList from "./TutorList";

export default function AppliedBoxes(props) {
  console.log(props.tutors);
  return (
    <div className="applied_boxes">
      <div className="applied_boxes_tutor_list">
        {props.tutors.map((tutor) => (
          <TutorList
            key={tutor._id}
            firstname={tutor.firstname}
            lastname={tutor.lastname}
            img="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        ))}
      </div>
      <div className="applied_boxes_more_info">
        <MoreInfo />
      </div>
    </div>
  );
}
