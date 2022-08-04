import "./Cover.scss";

export default function Cover(props) {
  return (
    <div className="cover">
      <img src={props.image} className="profile_pic" alt="avatar" />
      <div
        className="cover_wrapper"
        style={{
          backgroundImage: `url(${props.cover})`,
        }}
      ></div>
    </div>
  );
}
