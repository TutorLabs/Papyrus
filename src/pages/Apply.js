import { useState } from "react";
import "./Apply.scss";

import Header from "../components/layout/Header";
import ApplyBox from "../components/apply/ApplyBox";
import SearchBar from "../components/apply/SearchBar";

const postings = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Mahzabin Rashid Fariha",
    school: "Sunnydale",
    subjects:
      "English, Mathematics, Biology, Chemistry, Bangla, Science, Computer Science",
    salary: "6,000-15,000",
    days: "3",
    student_gender: "Female",
    preferred_gender: "N/A",
    class: "Class 8",
    medium: "Bangla Medium",
    location: "Dhanmondi",
    online: "Online",
  },
  {
    id: 2,
    img: "https://www.w3schools.com/css/trolltunga.jpg",
    name: "Inqiyad Patwary",
    school: "Mastermind",
    subjects: "English, Mathematics, Biology, Chemistry",
    salary: "6,000-15,000",
    days: "5",
    student_gender: "Male",
    preferred_gender: "N/A",
    class: "Class 9",
    medium: "English Medium",
    location: "Gulshan",
    online: "In-person",
  },
];

export default function Apply() {
  const [inputText, setInputText] = useState("");

  let inputHandler = (event) => {
    let lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredPostings = postings.filter((posting) => {
    // if no input then return the original
    if (inputText === "") {
      return (
        <ApplyBox
          key={posting.id}
          img={posting.img}
          name={posting.name}
          school={posting.school}
          subjects={posting.subjects}
          salary={posting.salary}
          days={posting.days}
          preferred_gender={posting.preferred_gender}
          student_gender={posting.student_gender}
          class={posting.class}
          medium={posting.medium}
          location={posting.location}
          online={posting.online}
        />
      );
    }
    // return the item which contains the user input
    else {
      if (
        posting.name.toLowerCase().includes(inputText) ||
        posting.school.toLowerCase().includes(inputText) ||
        posting.subjects.toLowerCase().includes(inputText) ||
        posting.salary.toLowerCase().includes(inputText) ||
        posting.days.toLowerCase().includes(inputText) ||
        posting.class.toLowerCase().includes(inputText) ||
        posting.medium.toLowerCase().includes(inputText) ||
        posting.location.toLowerCase().includes(inputText) ||
        posting.online.toLowerCase().includes(inputText) ||
        posting.preferred_gender.toLowerCase() === inputText ||
        posting.student_gender.toLowerCase() === inputText
      ) {
        return (
          <ApplyBox
            key={posting.id}
            img={posting.img}
            name={posting.name}
            school={posting.school}
            subjects={posting.subjects}
            salary={posting.salary}
            days={posting.days}
            preferred_gender={posting.preferred_gender}
            student_gender={posting.student_gender}
            class={posting.class}
            medium={posting.medium}
            location={posting.location}
            online={posting.online}
          />
        );
      }
    }
  });

  /* const [arr, setArr] = useState([]);

  useEffect(() => {
    const allDetails = async () => {
      const response = await fetch("/posting");
      const json = await response.json();
      console.log(json);
      setArr(json.data);
    };
    allDetails();
  }, []); */

  return (
    <div className="apply">
      <Header title="Apply" subtitle="Apply to postings which suit you" />
      <SearchBar postings={postings} inputHandler={inputHandler} />
      {filteredPostings.map((posting) => (
        <ApplyBox
          key={posting.id}
          img={posting.img}
          name={posting.name}
          school={posting.school}
          subjects={posting.subjects}
          salary={posting.salary}
          days={posting.days}
          preferred_gender={posting.preferred_gender}
          student_gender={posting.student_gender}
          class={posting.class}
          medium={posting.medium}
          location={posting.location}
          online={posting.online}
        />
      ))}
    </div>
  );
}

/*
  {arr.map((item) => {
        let name = `${item.firstname} ${item.lastname}`;
        return item.posts.map((post) => {
          const salary_range = `${post.min_salary} - ${post.max_salary}`
          return (
            <ApplyBox
              key={post._id}
              img="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              name={name}
              school={post.preferred_institution}
              subjects={post.subjects}
              location={post.location}
              salary={salary_range}
              days={post.availability_days}
            />
          );
        });
      })}
*/

/*
<ApplyBox
              key={post._id}
              id={post._id}
              img="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              name={name}
              school={post.preferred_institution}
              subjects={post.subjects}
              location={post.location}
              salary={salary_range}
              days={post.availability_days}
              preferred_gender={post.tutor_gender}
              student_gender={post.student_gender}
              medium={post.medium}
              online={post.presence}
              class={post.class}
            />
          */
