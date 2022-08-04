import "./AppliedBoxes.scss";
import { useState } from "react";
import MoreInfo from "./MoreInfo";
import TutorList from "./TutorList";

const initialTutor = {
  _id: "",
  firstname: "",
  lastname: "",
  university: "",
  major: "",
  school: "",
  medium: "",
  class: "",
  online: "",
  tutor_gender: "",
  bio: "",
  locations: [],
  days: "",
  subjects: [],
  max_salary: "",
  min_salary: "",
  eca: "",
  hobbies: "",
  experience: "",
};

export default function AppliedBoxes(props) {
  const [selectedTutor, setSelectedTutor] = useState(initialTutor);

  return (
    <div className="applied_boxes">
      <div className="applied_boxes_tutor_list">
        {props.tutors.map((tutor) => (
          <div
            key={tutor._id}
            onClick={() => {
              setSelectedTutor(tutor);
            }}
          >
            <TutorList
              firstname={tutor.firstname}
              lastname={tutor.lastname}
              class={tutor.class}
              min_salary={tutor.min_salary}
              max_salary={tutor.max_salary}
              school={tutor.school}
              tutor_gender={tutor.tutor_gender}
              img="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
        ))}
      </div>
      <div className="applied_boxes_more_info">
        <MoreInfo tutor={selectedTutor} applied={props.applied}/>
      </div>
    </div>
  );
}
