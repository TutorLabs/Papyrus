import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import SearchBar from "./SearchBar";
import ApplyBox from "./ApplyBox";

// mui
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// mui
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ApplyContainer() {
  const [value, setValue] = useState(0);
  const [inputText, setInputText] = useState("");
  const [postings, setPostings] = useState([]);
  const [appliedPostings, setAppliedPostings] = useState([]);
  const { token } = useSelector((state) => state.auth);

  let inputHandler = (event) => {
    // convert input text to lower case
    let lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    const allDetails = async () => {
      const response = await fetch("/api/posting", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      setPostings(json.postings);
      setAppliedPostings(json.appliedPostings);
    };
    allDetails();
  }, []);

  const filteredPostings = postings?.filter((posting) => {
    let name = `${posting.firstname} ${posting.lastname}`;
    if (inputText === "") {
      return posting;
    } else
      return (
        (name.toLowerCase().includes(inputText) ||
          posting.school?.toLowerCase().includes(inputText) ||
          posting.subjects
            .map((sub) => sub?.toLowerCase())
            .toString()
            .includes(inputText) ||
          posting.max_salary?.toLowerCase().includes(inputText) ||
          posting.min_salary?.toLowerCase().includes(inputText) ||
          posting.availability_days?.toLowerCase().includes(inputText) ||
          `class ${posting.class}`?.toLowerCase().includes(inputText) ||
          posting.medium?.toLowerCase().includes(inputText) ||
          posting.location?.toLowerCase().includes(inputText) ||
          posting.online?.toLowerCase().includes(inputText) ||
          posting.tutor_gender?.toLowerCase() === inputText ||
          posting.student_gender?.toLowerCase() === inputText) &&
        posting
      );
  });

  const filteredAppliedPostings = appliedPostings?.filter((posting) => {
    let name = `${posting.firstname} ${posting.lastname}`;
    if (inputText === "") {
      return posting;
    } else
      return (
        (name.toLowerCase().includes(inputText) ||
          posting.school?.toLowerCase().includes(inputText) ||
          posting.subjects
            .map((sub) => sub?.toLowerCase())
            .toString()
            .includes(inputText) ||
          posting.max_salary?.toLowerCase().includes(inputText) ||
          posting.min_salary?.toLowerCase().includes(inputText) ||
          posting.availability_days?.toLowerCase().includes(inputText) ||
          `class ${posting.class}`?.toLowerCase().includes(inputText) ||
          posting.medium?.toLowerCase().includes(inputText) ||
          posting.location?.toLowerCase().includes(inputText) ||
          posting.online?.toLowerCase().includes(inputText) ||
          posting.tutor_gender?.toLowerCase() === inputText ||
          posting.student_gender?.toLowerCase() === inputText) &&
        posting
      );
  });

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div className="apply_container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="📝 Apply" />
            <Tab label="✅ Applied" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div>
            <SearchBar postings={postings} inputHandler={inputHandler} />
            {filteredPostings?.map((posting) => (
              <ApplyBox
                key={posting._id}
                id={posting._id}
                img={posting.photoUrl}
                name={`${posting.firstname} ${posting.lastname}`}
                date={posting.date}
                school={posting.school}
                subjects={posting.subjects}
                max_salary={posting.max_salary}
                min_salary={posting.min_salary}
                days={posting.availability_days}
                preferred_gender={posting.tutor_gender}
                student_gender={posting.student_gender}
                class={posting.class}
                medium={posting.medium}
                location={posting.location}
                online={posting.online}
                other="Hello I'm groot"
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <SearchBar postings={appliedPostings} inputHandler={inputHandler} />
            {filteredAppliedPostings?.map((posting) => (
              <ApplyBox
                key={posting._id}
                id={posting._id}
                img={posting.photoUrl}
                name={`${posting.firstname} ${posting.lastname}`}
                date={posting.date}
                school={posting.school}
                subjects={posting.subjects}
                max_salary={posting.max_salary}
                min_salary={posting.min_salary}
                days={posting.availability_days}
                preferred_gender={posting.tutor_gender}
                student_gender={posting.student_gender}
                class={posting.class}
                medium={posting.medium}
                location={posting.location}
                online={posting.online}
                applied={true}
                other="Hello I'm groot"
              />
            ))}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
