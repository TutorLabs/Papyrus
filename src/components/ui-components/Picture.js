import "./Picture.scss";
import ProfilePicture from "../../images/user_avatar.png";

export default function Picture({ formData, setFormData }) {
  const handleChange = (prop) => (event) => {
    console.log(event);
    console.log(event.target.files[0]);
    setFormData({ ...formData, [prop]: event.target.files[0] });
  };

  return (
    <div className="picture">
      <form action="/upload" method="POST" encType="multipart/form-data">
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleChange("photo")}
        />
        <label htmlFor="file">
          <img src={ProfilePicture} alt="avatar"></img>
          <p>Upload Profile Picture</p>
        </label>
      </form>
    </div>
  );
}