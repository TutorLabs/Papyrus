import "./PostingBox.scss";
import OutlinedButtom from "../ui-components/OutlinedButton";
import Eye from "../../images/home/eye.svg";
import Edit from "../../images/home/edit.svg";
import Delete from "../../images/home/delete.svg";
import Cursor from "../../images/home/cursor.svg";

export default function PostingBox(props) {
  return (
    <div className="posting_box">
      <div className="posting_header">
        <div className="avatar">
          <img
            alt="avatar"
            src="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
        <div className="header_text">
          <h1>Mahzabin Rashid</h1>
          <h3>
            🏫 Sunnydale | <span>Jun 25, 2022</span>
          </h3>
        </div>
      </div>

      <div className="posting_content">
        <div className="posting_text">
          <p>
            <span>📚 Subjects to teach:</span>
            <br /> English, Mathematics, Biology, Chemistry
          </p>
          <hr />
          <div className="sub_section">
            <p>
              <span>✏️ Class:</span> Class 8
            </p>
            <p className="second">
              <span>📓 Medium:</span> English
            </p>
          </div>
          <hr />

          <p>
            <span>💸 Salary Range:</span> 6,000-15,000 Tk/month
          </p>
          <hr />

          <div className="sub_section">
            <p>
              <span>📍 Location:</span> Dhanmondi
            </p>
            <p className="second">
              <span>💃 Online/In-person:</span> In-person
            </p>
          </div>
          <hr />

          <div className="sub_section">
            <p>
              <span>👩‍🏫 Preferred Gender:</span> Female
            </p>
            <p className="second">
              <span>🙋‍♂️ Student's Gender:</span> Male
            </p>
          </div>
          <hr />

          <p>
            <span>🗓 Days:</span> 3 days/week
          </p>
        </div>

        <div className="posting_buttons">
          <button className="applicants_button">
            <img src={Cursor} alt="cursor" />
            <div className="apply_button_text">
              <p>Applicants</p>
              <h6>View tutors who applied to this posting</h6>
            </div>
          </button>
          <div className="other_buttons">
            <OutlinedButtom icon={Eye} text="View Details" green={true} />
            <OutlinedButtom icon={Edit} text="Edit Posting" green={true} />
            <OutlinedButtom icon={Delete} text="Delete Posting" green={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
