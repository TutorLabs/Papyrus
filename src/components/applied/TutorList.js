import "./TutorList.scss";

import TagBox from "../ui-components/TagBox";

export default function TutorList(props) {
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
          <h1>Mahzabin Rashid Fariha </h1>
          <div className="tags">
            <TagBox emoji="🏫" text="Sunnydale" />
            <TagBox emoji="✏️" text="Class 12" />
            <TagBox emoji="💸" text="6,000-15,000" />
            <TagBox emoji="👨" text="Female" />
          </div>
        </div>
      </div>
      <div className="tutor">
        <div className="user_img">
          <img
            alt="user"
            src="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
        <div className="content">
          <h1>Mahzabin Rashid Fariha </h1>
          <div className="tags">
            <TagBox emoji="🏫" text="Sunnydale" />
            <TagBox emoji="✏️" text="Class 12" />
            <TagBox emoji="💸" text="6,000-15,000" />
            <TagBox emoji="👨" text="Female" />
          </div>
        </div>
      </div>
    </div>
  );
}
