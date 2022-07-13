import "./OutlinedButton.scss";
export default function Button(prop) {
  const changeColor = {
    border: prop.green ? "1px solid #2cc3a0" : "1px solid #E23C3C",
    // hover does not work yet
    "&:hover": {
      backgroundColor: prop.green ? "#2cc3a0" : "#2cc3a0",
    },
  };

  return (
    <button className="outlined_button" style={changeColor}>
      <div className="button_container">
        <img src={prop.icon} />
        <p>{prop.text}</p>
      </div>
    </button>
  );
}
