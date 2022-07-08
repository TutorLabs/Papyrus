import "./PostingBox.scss";
import OutlinedButtom from "../ui-components/OutlinedButton";
import Eye from "../../images/home/eye.svg";
import Edit from "../../images/home/edit.svg";
import Delete from "../../images/home/delete.svg";
import Cursor from "../../images/home/cursor.svg";
import Avatar from "@mui/material/Avatar";

export default function PostingBox(props) {
  return (
    <div className="posting_box">
      <div className="posting_header">
        <div className="avatar">
          <Avatar
            alt="avatar"
            src="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            sx={{ width: "90px", height: "90px" }}
          />
        </div>
        <div>
          <h1>Mahzabin Rashid</h1>
          <h3>
            🏫 Sunnydale | <span>Jun 25, 2022</span>
          </h3>
        </div>
      </div>

      <div className="posting_content">
        <div className="posting_text">
          <p>
            <span>
              📚 Subjects to teach:
              <br />
            </span>
            English, Mathematics, Biology, Chemistry
          </p>
        </div>

        <hr />
        <div className="posting_buttons">
          <button className="applicants_button">
            <div className="button_container">
              <img src={Cursor} />
              <div className="apply_button_text">
                <p>Applicants</p>
                <h6>View tutors who applied to this posting</h6>
              </div>
            </div>
          </button>
          <OutlinedButtom icon={Eye} text="View Details" green={true} />
          <OutlinedButtom icon={Edit} text="Edit" green={true} />
          <OutlinedButtom icon={Delete} text="Delete Posting" green={false} />
        </div>
      </div>
    </div>
  );
}
