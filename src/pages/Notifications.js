import "./Notifications.scss";
import Header from "../components/layout/Header";

export default function Notifications() {
  return (
    <div className="notif_page">
      <Header title="Notifications" subtitle="View your notifications" />
      <div className="notif_content">
        <p>
          You created a posting to teach <span>Mahzabin Rashid</span>.
        </p>
        <h6>3 hours ago</h6>
        <hr />
        <p>
          This parents <span>liked</span> you. View and apply to their posting.
        </p>
        <h6>3 hours ago</h6>
        <hr />
        <p>
          <span>Inqiyad Patwary</span> applied to teach{" "}
          <span>Mahzabin Rashid</span>.
        </p>
        <h6>3 hours ago</h6>
        <hr />
        <p>
          You created a posting to teach <span>Mahzabin Rashid</span>.
        </p>
        <h6>3 hours ago</h6>
        <hr />
        <p>
          This parents <span>liked</span> you. View and apply to their posting.
        </p>
        <h6>3 hours ago</h6>
        <hr />
        <p>
          <span>Inqiyad Patwary</span> applied to teach
          <span>Mahzabin Rashid</span>.
        </p>
        <h6>3 hours ago</h6>
        <hr />
      </div>
    </div>
  );
}
