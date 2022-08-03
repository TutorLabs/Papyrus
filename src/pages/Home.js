import "./Home.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // for error demonstration
import { updateText } from "../redux/error"; // for error demonstration
import { Link } from "react-router-dom";
import Create from "../images/home/create.svg";
import Support from "../images/home/support.svg";
import Header from "../components/layout/Header";
import ActionBox from "../components/home/ActionBox";
import PostingBox from "../components/home/PostingBox";

import Grid from "@mui/material/Grid";

import { useTranslation } from "react-i18next"; // for translation demonstration

export default function Home() {
  const dispatch = useDispatch(); // for error demonstration
  const { t } = useTranslation(); // for translation demonstration
  const [arr, setArr] = useState([]);
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    const allPosts = async () => {
      const response = await fetch("/api/myposts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      setArr(json.data);
    };
    allPosts();
  }, []);
  return (
    <div className="home">
      <Header title={t("Home")} subtitle="View information important to you" />
      <div className="home_action_box">
        <Link to="/create" className="home_action_box_link">
          <ActionBox img={Create} title="Create" subtitle="Make a new post" />
        </Link>

        <a href="mailto:mahzabin@gmail.com" className="home_action_box_link">
          <ActionBox
            img={Support}
            title="Support"
            subtitle="Send us an email"
          />
        </a>
      </div>
      <h2 className="sub_header">{t("Postings you have created")}:</h2>
      <hr />

      <Grid container>
        {arr.map((post) => {
          return (
            <Grid item sm={12} lg={6}>
              <PostingBox
                key={post._id}
                id={post._id}
                name={`${post.firstname} ${post.lastname}`}
                subjects={post.subjects}
                class={post.class}
                medium={post.medium}
                max_salary={post.max_salary}
                min_salary={post.min_salary}
                location={post.location}
                tutor_gender={post.tutor_gender}
                student_gender={post.student_gender}
                availability_days={post.availability_days}
                days={post.availability_days}
                institution={post.preferred_institution}
                presence={post.presence}
              />
            </Grid>
          );
        })}
      </Grid>
      <p // for error demonstration
        onClick={() => {
          dispatch(updateText("Server failed to fetch data."));
        }}
      >
        click me for error
      </p>
    </div>
  );
}
