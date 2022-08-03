import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AppliedContainer.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppliedBoxes from "./AppliedBoxes";
const data = [
  {
    PostId: "69",
    Tutors: [
      {
        Name: "Mahzabin",
        School: "Sunnydale",
        Class: "class 12",
        Subject: ["English", "Bangla"],
      },
      {
        Name: "Inqiyad",
        School: "Mastermind",
        Class: "class 12",
        Subject: ["English", "Bangla"],
      },
    ],
  },
];

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function AppliedContainer() {
  const [value, setValue] = useState(0);
  const params = useParams();

  const postid = params.id;

  console.log(postid);

  useEffect(() => {
    const allDetails = async () => {
      const response = await fetch(`/applicants/${postid}`);
      const json = await response.json();
      console.log(json);
      // const data = json.post;
    };
    allDetails();
  }, []);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div className="applied_container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="📝 Applied" />
            <Tab label="✅ Liked" />
            <Tab label="❌ Rejected" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AppliedBoxes />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <h1>Sadman</h1>
            <p>Education: University of Waterloo</p>
            <p>Major: Computer Science</p>
            <p>School: Sunnydale</p>
            <button>Like</button>
            <button>Reject</button>
          </div>
          <br />
          <div>
            <h1>Fariha</h1>
            <p>Education: University of Waterloo</p>
            <p>Major: Computer Science</p>
            <p>School: Sunnydale</p>
            <button>Like</button>
            <button>Reject</button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div>
            <h1>Mahzabin</h1>
            <p>Education: University of Waterloo</p>
            <p>Major: Computer Science</p>
            <p>School: Sunnydale</p>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
