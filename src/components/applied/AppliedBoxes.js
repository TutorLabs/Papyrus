import "./AppliedBoxes.scss";
import { useState, useEffect } from "react";
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
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (props.tutors.length !== 0) {
      setEmpty(false);
    }
    console.log(props.tutors.length);
    if (props.tutors[0]) {
      setSelectedTutor(props?.tutors[0]);

      props.tutors.map((tutor) => {
        if (
          tutor.university !== "NA" &&
          tutor.university !== "N/A" &&
          tutor.university !== ""
        ) {
          console.log(tutor.university);
        } else {
          console.log(tutor.school);
        }
      });
    }
  }, [props.tutors]);

  if (empty) {
    return <h1 className="empty">No tutors to show</h1>;
  }
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
              id={tutor._id}
              firstname={tutor.firstname}
              lastname={tutor.lastname}
              min_salary={tutor.min_salary}
              max_salary={tutor.max_salary}
              school={
                tutor.university !== "NA" &&
                tutor.university !== "N/A" &&
                tutor.university !== ""
                  ? `${tutor.university}`
                  : `${tutor.school}`
              }
              class={
                tutor.university !== "NA" &&
                tutor.university !== "N/A" &&
                tutor.university !== ""
                  ? `${tutor.major}`
                  : `${tutor.class}`
              }
              tutor_gender={tutor.tutor_gender}
              img="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </div>
        ))}
      </div>
      <div className="applied_boxes_more_info">
        <MoreInfo tutor={selectedTutor} applied={props.applied} />
      </div>
    </div>
  );
}
