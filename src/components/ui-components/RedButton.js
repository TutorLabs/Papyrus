import "./RedButton.scss";
export default function Button(prop) {
  return (
    <button className="red_button">
      {prop.text}
    </button>
  );
}
