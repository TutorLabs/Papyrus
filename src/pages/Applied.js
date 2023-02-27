import "./Applied.scss";
import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import AppliedContainer from "../components/applied/AppliedContainer";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateText } from "../redux/error";

export default function Applied() {
  const [applied, setApplied] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    const allDetails = async () => {
      await fetch(`/api/applicants/${params.id}`)
        .then((response) => {
          if (!response.ok) {
            dispatch(
              updateText("Server failed to get a response. Please try again")
            );
          }
          return response.json();
        })
        .then((json) => {
          const allApplicants = json.allApplicants;
          setApplied(allApplicants.applied);
        })
        .catch(() => {
          dispatch(updateText("Server failed to fetch data. Please try again"));
        });
    };
    allDetails();
  }, []);

  return (
    <div className="applied">
      <Header
        title="Applied"
        subtitle="See tutors who applied to your posting"
      />
      <AppliedContainer tutors={applied} />
    </div>
  );
}
