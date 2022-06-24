import "./TagBox.scss";

export default function TagBox(props) {
  return (
    <div className="tag_box">
      <p>
        {props.emoji} {props.text}
      </p>
    </div>
  );
}
