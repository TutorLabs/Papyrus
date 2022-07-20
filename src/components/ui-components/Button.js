import "./Button.scss";
export default function Button(prop) {
  return (
    <button className="ui_button" onClick={prop.click}>
      {prop.text}
    </button>
  );
}
