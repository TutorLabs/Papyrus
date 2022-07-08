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
        <div>
          <img src="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div>
          <h1>Mahzabin Rashid Fariha</h1>
          <h3>
            🏫 Sunnydale | <span>Jun 25, 2022</span>
          </h3>
        </div>
      </div>
      <hr />
      <div className="posting_content">
        <p>
          <span>
            📚 Subjects to teach:
            <br />
          </span>
          English, Mathematics, Biology, Chemistry
        </p>
      </div>

      <hr />
      <button className="apply_button">
        <div className="button_container">
          <img src={Cursor} />
          <div className="apply_button_text">
          <p>Applicants</p>
          <p>View tutors who applied to this posting</p>
          </div>
          
        </div>
      </button>
      <OutlinedButtom icon={Eye} text="View Details" green={true} />
      <OutlinedButtom icon={Edit} text="Edit" green={true} />
      <OutlinedButtom icon={Delete} text="Delete Posting" green={false} />
    </div>
  );
}
