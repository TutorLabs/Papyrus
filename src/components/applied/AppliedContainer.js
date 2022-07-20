import { useState } from "react";
import "./AppliedContainer.scss";

import ApplyBox from "../apply/ApplyBox";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div className="applied_container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="✅ Liked" />
            <Tab label="📝 Applied" />
            <Tab label="❌ Rejected" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div>
            <h1>Inqiyad</h1>
            <p>Education: University of Waterloo</p>
            <p>Major: Computer Science</p>
            <p>School: Sunnydale</p>
          </div>
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
