import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./TutorInfo.scss";
export default function TutorInfo() {
  const params = useParams();
  const postid = params.id;
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    const allDetails = async () => {
      const response = await fetch(`/api/tutorinfo/${postid}`)
      const json = await response.json();
      console.log(json)
    };
    allDetails();
  }, []);
  return (
    <div className="tutor_info">
      <h1>tutor info</h1>
    </div>
  );
}
