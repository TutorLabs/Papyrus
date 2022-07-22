import "./Loader.scss";
import BeatLoader from "react-spinners/BeatLoader";

export default function Loader() {
  return (
    <div className="loader">
      <BeatLoader color={"#1F026B"} size={30} />
    </div>
  );
}
