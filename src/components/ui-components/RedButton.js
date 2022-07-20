import "./RedButton.scss";
export default function Button(prop) {
  return (
    <button className="red_button" onClick={prop.click}>
      {prop.text}
    </button>
  );
}
