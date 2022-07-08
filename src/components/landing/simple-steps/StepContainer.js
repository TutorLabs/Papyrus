import "./StepContainer.scss";

export default function StepContainer(props) {
  return (
    <div className="step_container">
      <h2>{props.num}</h2>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}
