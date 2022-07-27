import "./ActionBox.scss";

export default function ActionBox(props) {
  return (
      <div className="action_box">
        <div>
          <img src={props.img} alt=""></img>
        </div>
        <div>
          <h2>{props.title}</h2>
          <h6>{props.subtitle}</h6>
        </div>
      </div>
  );
}
