import "./TutorList.scss";
import TagBox from "../ui-components/TagBox";
import OutlinedButtom from "../ui-components/OutlinedButton";
import Eye from "../../images/eye.svg";

export default function TutorList(props) {
  const handleView = () => {
    console.log(props)
    window.open(`/tutor/${props.id}`, "_blank");
  };

  return (
    <div className="tutor_list">
      <div className="tutor">
        <div className="user_img">
          <img
            alt="user"
            src={props.photoUrl}
          />
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
          <OutlinedButtom
            icon={Eye}
            text="View Tutor"
            green={true}
            click={handleView}
          />
        </div>
      </div>
    </div>
  );
}
