import "./Picture.scss";
import ProfilePicture from "../../images/user_avatar.png";
export default function Picture() {
  return (
    <div className="picture">
      <img src={ProfilePicture} alt="avatar"></img>
      <p>Add Profile Picture</p>
    </div>
  );
}
