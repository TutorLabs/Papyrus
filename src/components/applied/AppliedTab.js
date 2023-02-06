import "./AppliedTab.scss";
import { useState, useEffect } from "react";
import MoreInfoDesktop from "./MoreInfoDesktop";
import TutorInfo from "./TutorInfo";

// Fariha: check why you need this again
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
  locations: "",
  days: "",
  subjects: [],
  max_salary: "",
  min_salary: "",
  eca: "",
  hobbies: "",
  experience: "",
};

export default function AppliedTab(props) {
  const [selectedTutor, setSelectedTutor] = useState(initialTutor);
  const [empty, setEmpty] = useState(true);
  // Fariha: try to say "fetching postings instead of "no tutors to show" when it is rendering

  useEffect(() => {
    if (props.tutors.length !== 0) {
      setEmpty(false);
      setSelectedTutor(props.tutors[0]);
    }
  }, [props.tutors]);

  if (empty) {
    return <p className="empty">No tutors to show</p>;
  }
  return (
    <div className="applied_tab">
      <div className="applied_tab_tutor_list">
        {props.tutors.map((tutor) => {
          if (tutor) {
            return (
              <div
                key={tutor._id}
                onClick={() => {
                  setSelectedTutor(tutor);
                }}
              >
                <TutorInfo
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
                  photoUrl={tutor.photoUrl}
                  applied={props.applied}
                />
              </div>
            );
          }
        })}
      </div>
      <div className="applied_tab_more_info">
        {props.tutors && (
          <MoreInfoDesktop tutor={selectedTutor} applied={props.applied} />
        )}
      </div>
    </div>
  );
}
