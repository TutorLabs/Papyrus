import "./TutorInfo.scss";
import TagBox from "../ui-components/TagBox";
import { useState } from "react";
import MoreInfoMobile from "./MoreInfoMobile";
export default function TutorInfo(props) {
  const [tutor, setTutor] = useState("");
  const [more, setMore] = useState(false);
  const handleView = async () => {
    if (!more) {
      await fetch(`/api/tutorinfo/${props.id}`)
        .then((res) => res.json())
        .then((result) => {
          setTutor(result.data);
          setMore(true);
        });
    } else {
      setMore(false);
    }
  };

  return (
    <div className="tutor_info">
      <div className="tutor">
        <div className="user_img">
          <img alt="user" src={props.photoUrl} />
        </div>
        <div className="content">
          <h1>{`${props.firstname} ${props.lastname}`}</h1>
          <div className="tags">
            <TagBox emoji="🏫" text={props.school} />
            <TagBox emoji="✏️" text={props.class} />
            <TagBox
              emoji="💸"
              text={`${props.max_salary} ${props.min_salary}`}
            />
            <TagBox emoji="👨" text={props.tutor_gender} />
          </div>

          <p onClick={handleView} className="view_more">
            {more ? "Show less" : "Show more"}
          </p>
          {more && <MoreInfoMobile tutor={tutor} applied={props.applied} />}
        </div>
      </div>
    </div>
  );
}
