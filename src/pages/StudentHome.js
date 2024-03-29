import "./StudentHome.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // for error demonstration
import { updateText } from "../redux/error"; // for error demonstration
import { Link } from "react-router-dom";
import Create from "../images/home/create.svg";
import Support from "../images/home/support.svg";
import Header from "../components/layout/Header";
import ActionBox from "../components/home/ActionBox";
import PostingBox from "../components/home/Student/PostingBox";
import Cover from "../components/home/Tutor/Cover";

import { getAuth, onAuthStateChanged} from "firebase/auth"
import { updateToken } from "../redux/auth";

import Grid from "@mui/material/Grid";

import { useTranslation } from "react-i18next"; // for translation demonstration

export default function Home() {
  const dispatch = useDispatch(); // for error demonstration
  const { t } = useTranslation(); // for translation demonstration
  const [postings, setPostings] = useState([]);
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(updateToken(user.accessToken))
      if (user.accessToken != token) {
        window.location.reload(true)
      }
    }
  })

  const getPostings = async () => {
    setLoading(true);
    await fetch("/api/myposts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          dispatch(
            updateText("Server failed to get a response. Please try again")
          );
        }
        return response.json();
      })
      .then((json) => {
        setPostings(json.data);
        setLoading(false);
      })
      .catch(() => {
        dispatch(updateText("Server failed to fetch data. Please try again"));
      });
  };
  const userInfo = async () => {
    const response = await fetch("/api/phone", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    setPhoto(json.photoUrl);
  };

  useEffect(() => {
    getPostings();
    userInfo();
  }, []);

  return (
    <div className="student_home">
      <Cover
        image={photo}
        cover="https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <div className="student_home_content">
        <Header
          title={t("Home")}
          subtitle="View information important to you"
        />
        <div className="home_action_box">
          <Link to="/create" className="home_action_box_link">
            <ActionBox img={Create} title="Create" subtitle="Make a new post" />
          </Link>

          <a href="mailto:hello@tutorlab.io" className="home_action_box_link">
            <ActionBox
              img={Support}
              title="Support"
              subtitle="Send us an email"
            />
          </a>
        </div>
        <h2 className="sub_header">{t("Postings you have created")}:</h2>
        <hr />
        {loading === true && (
          <h1 className="loading">Fetching your postings...</h1>
        )}

        {loading === false && (
          <Grid container className="postings">
            {postings.map((post) => {
              return (
                <Grid item sm={12} lg={6} key={post._id}>
                  <PostingBox
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
                    institution={post.school}
                    online={post.online}
                    getPostings={getPostings}
                    other_info={post.other_info}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
      </div>
    </div>
  );
}
