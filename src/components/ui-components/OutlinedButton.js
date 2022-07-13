import "./OutlinedButton.scss";
export default function Button(prop) {
  const changeColor = {
    border: prop.green ? "1px solid #2cc3a0" : "1px solid #E23C3C",
  };

  return (
    <button className="outlined_button" style={changeColor}>
      <div className="button_container">
        <img src={prop.icon} alt="" />
        <p>{prop.text}</p>
      </div>
    </button>
  );
}
