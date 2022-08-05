import "./TutorList.scss";
import { useNavigate } from "react-router";
import TagBox from "../ui-components/TagBox";
import OutlinedButtom from "../ui-components/OutlinedButton";
import Eye from "../../images/eye.svg";

export default function TutorList(props) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/tutor/${props.id}`);
  };

  return (
    <div className="tutor_list">
      <div className="tutor">
        <div className="user_img">
          <img
            alt="user"
            src="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
