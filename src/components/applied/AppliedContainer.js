import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // for error demonstration
import { updateText } from "../../redux/error"; // for error demonstration
import "./AppliedContainer.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppliedBoxes from "./AppliedBoxes";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
// import Help from "./Help";
import TutorHome from "../../pages/TutorHome";
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
  const dispatch = useDispatch();
  const params = useParams();
  const [value, setValue] = useState(0);
  const [applied, setApplied] = useState([]);
  const [liked, setLiked] = useState([]);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const postid = params.id;

  useEffect(() => {
    const allDetails = async () => {
      await fetch(`/api/applicants/${postid}`)
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
          setLiked(allApplicants.liked);
        })
        .catch(() => {
          dispatch(updateText("Server failed to fetch data. Please try again"));
        });
    };
    allDetails();
  }, []);

  return (
    <div className="applied_container">
      {/* <Help /> */}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="📝 Applied" />
            <Tab label="✅ Liked" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AppliedBoxes tutors={applied} applied={true} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AppliedBoxes tutors={liked} applied={false} />
        </TabPanel>
      </Box>
    </div>
  );
}
