import "./Button.scss";
export default function Button(prop) {
  return (
    <button className="ui_button">
      {prop.text}
    </button>
  );
}
