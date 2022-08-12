import "./TagBox.scss";

export default function TagBox({ emoji, text }) {
  return (
    <div className="tag_box">
      <p>
        {emoji} {text}
      </p>
    </div>
  );
}
