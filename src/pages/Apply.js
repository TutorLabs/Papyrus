import { useState, useEffect } from "react";
import "./Apply.scss";

import Header from "../components/layout/Header";
import ApplyBox from "../components/apply/ApplyBox";
import SearchBar from "../components/apply/SearchBar";


export default function Apply() {
  const [inputText, setInputText] = useState("");
  const [postings, setPostings] = useState([]);

  let inputHandler = (event) => {
    // convert input text to lower case
    let lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    const allDetails = async () => {
      const response = await fetch("/posting");
      const json = await response.json();
      setPostings(json.postings);

    };
    allDetails();
  }, []);

  const filteredPostings = postings.filter((posting) => {
    if (inputText === '') {
        return posting;
    }
    else  
    // posting.name.toLowerCase().includes(inputText) ||
    return (posting.preferred_institution.toLowerCase().includes(inputText) ||
    posting.subjects.map(sub => sub.toLowerCase()).toString().includes(inputText) ||
    posting.max_salary.toLowerCase().includes(inputText) ||
    posting.min_salary.toLowerCase().includes(inputText) ||
    posting.availability_days.toLowerCase().includes(inputText) ||
    `class ${posting.class}`.toLowerCase().includes(inputText) ||
    posting.medium.toLowerCase().includes(inputText) ||
    posting.location.toLowerCase().includes(inputText) ||
    posting.presence.toLowerCase().includes(inputText) ||
    posting.tutor_gender.toLowerCase() === inputText ||
    posting.student_gender.toLowerCase() === inputText) && posting
})

  return (
    <div className="apply">
      <Header title="Apply" subtitle="Apply to postings which suit you" />
      <SearchBar postings={postings} inputHandler={inputHandler} />
       {filteredPostings.map((posting) => (
        <ApplyBox
          key={posting._id}
          img="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          name="{posting.name}"
          school={posting.preferred_institution}
          subjects={posting.subjects}
          max_salary={posting.max_salary}
          min_salary={posting.min_salary}
          days={posting.availability_days}
          preferred_gender={posting.tutor_gender}
          student_gender={posting.student_gender}
          class={posting.class}
          medium={posting.medium}
          location={posting.location}
          presence={posting.presence}
        />
      ))}
    </div>
  );
}

