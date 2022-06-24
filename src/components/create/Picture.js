import "./Picture.scss";
import ProfilePicture from "../../images/profile_picture_placeholder.png";
export default function Picture() {
  return (
    <div className="picture">
      <img src={ProfilePicture} alt="avatar"></img>
      <p>Add Profile Picture</p>
    </div>
  );
}
