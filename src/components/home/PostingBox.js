import { useState } from "react";
import { updateText } from "../../redux/error"; // for error demonstration
import "./PostingBox.scss";
import OutlinedButtom from "../ui-components/OutlinedButton";
import Edit from "../../images/home/edit.svg";
import Delete from "../../images/home/delete.svg";
import Cursor from "../../images/home/cursor.svg";
import Modal from "../ui-components/Modal";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";

import { useTranslation } from "react-i18next"; // for translation demonstration

// redux imports
import { useDispatch } from "react-redux"; // for error demonstration

export default function PostingBox(props) {
  const { t } = useTranslation(); // for translation demonstration
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const cookies = new Cookies();

  const navigate = useNavigate();
  // const [arr, setArr] = useState([]);

  // const { token } = useSelector((state) => state.auth);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    fetch(`/api/post/${props.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "CSRF-Token": cookies.get("XSRF-TOKEN"),
      },
    })
      .then(() => {
        props.getPostings();
        handleClose();
      })
      .catch(() => {
        dispatch(updateText("Server failed to fetch data. Please try again"));
      });
  };

  const handleEdit = async () => {
    navigate(`/edit/${props.id}`);
  };

  const handleView = async () => {
    navigate(`/applied/${props.id}`);
  };

  return (
    <div className="posting_box">
      <Modal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        handleDelete={handleDelete}
      />

      <div className="posting_header">
        <div className="avatar">
          <img
            alt="avatar"
            src="https://images.pexels.com/photos/10698547/pexels-photo-10698547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
        <div className="header_text">
          <h1>{props.name}</h1>
          <h3>
            🏫 {props.institution} | <span>Jun 25, 2022</span>
          </h3>
        </div>
      </div>

      <div className="posting_content">
        <div className="posting_text">
          <p>
            <span>📚 {t("Subjects to teach")}: </span>

            {props.subjects.join(", ")}
          </p>

          <hr />
          <div className="sub_section">
            <p>
              <span>✏️ Class:</span> {props.class}
            </p>
            <p className="second">
              <span>📓 Medium:</span> {props.medium}
            </p>
          </div>
          <hr />

          <p>
            <span>💸 Salary Range:</span> {props.max_salary}-{props.min_salary}{" "}
            Tk/month
          </p>
          <hr />

          <div className="sub_section">
            <p>
              <span>📍 Location:</span> {props.location}
            </p>
            <p className="second">
              <span>💃 Presence: </span>
              {props.presence}
            </p>
          </div>
          <hr />

          <div className="sub_section">
            <p>
              <span>👩‍🏫 Preferred Gender:</span> {props.tutor_gender}
            </p>
            <p className="second">
              <span>🙋‍♂️ Student's Gender:</span> {props.student_gender}
            </p>
          </div>
          <hr />

          <p>
            <span>🗓 Days:</span> {props.days} days/week
          </p>
        </div>

        <div className="posting_buttons">
          <button className="applicants_button" onClick={handleView}>
            <img src={Cursor} alt="cursor" />
            <div className="apply_button_text">
              <p>View Applicants</p>
              <h6>See tutors who applied to this posting</h6>
            </div>
          </button>
          <div className="other_buttons">
            <OutlinedButtom
              icon={Edit}
              text="Edit Posting"
              green={true}
              click={handleEdit}
            />
            <OutlinedButtom
              icon={Delete}
              text="Delete Posting"
              green={false}
              click={handleOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
