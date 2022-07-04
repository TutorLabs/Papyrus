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
          <ApplyBox
            img="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            name="Idk "
            school="Mastermind"
            subjects="English, Mathematics, Biology, Chemistry, Bangla, Science, Computer Science"
            locations="Dhanmondi, Gulshan, Banani"
            salary="6,000-15,000"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ApplyBox
            img="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            name="Inqiyad Patwary"
            school="Mastermind"
            subjects="English, Mathematics, Biology, Chemistry, Bangla, Science, Computer Science"
            locations="Dhanmondi, Gulshan, Banani"
            salary="6,000-15,000"
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ApplyBox
            img="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            name="Mahzabin Rashid"
            school="Mastermind"
            subjects="English, Mathematics, Biology, Chemistry, Bangla, Science, Computer Science"
            locations="Dhanmondi, Gulshan, Banani"
            salary="6,000-15,000"
          />
        </TabPanel>
      </Box>
    </div>
  );
}
