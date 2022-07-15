import "./Apply.scss";
import { useState, useEffect } from "react";

import Header from "../components/layout/Header";
import ApplyBox from "../components/apply/ApplyBox";
import Filter from "../components/apply/Filter";

export default function Apply() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const allDetails = async () => {
      const response = await fetch("/posting");
      const json = await response.json();
      console.log(json)
      setArr(json.data);
    };
    allDetails();
  }, []);

  return (
    <div className="apply">
      <Header title="Apply" subtitle="Apply to postings which suit you" />
      <Filter />

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
              locations={post.location}
              salary={salary_range}
              days={post.availability_days}
            />
          );
        });
      })}
    </div>
  );
}
