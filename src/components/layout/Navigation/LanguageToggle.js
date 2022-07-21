import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import "./LanguageToggle.scss";
import { useTranslation } from "react-i18next";

const LangSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff", // bhitorer gollu
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#1F026B", // 1F026B is blue
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const handleChange = (event) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("bn");
    }
  };
  return (
    <div className="language_toggle">
      <p>বাংলা</p>
      <LangSwitch onChange={handleChange} sx={{ m: 1 }} defaultChecked />
      <p>English</p>
    </div>
  );
}
