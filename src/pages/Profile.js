import "./Profile.scss";

import Header from "../components/layout/Header";
//import ProfileContainer from "../components/profile/ProfileContainer";

export default function Profile() {
  return (
    <div className="profile">
      <Header title="Profile" subtitle="View and update your profile here" />
    </div>
  );
}
