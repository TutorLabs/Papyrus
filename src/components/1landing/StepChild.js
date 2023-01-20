import "./StepChild.scss";

export default function StepChild(props) {
  return (
    <div className="step_child">
      <h2>{props.num}</h2>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}
