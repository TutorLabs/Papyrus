import { useState } from "react";
import { updateText } from "../../../redux/error"; // for error demonstration
import "./PostingBox.scss";
import OutlinedButtom from "../../ui-components/OutlinedButton";
import Edit from "../../../images/home/edit.svg";
import Delete from "../../../images/home/delete.svg";
import Cursor from "../../../images/home/cursor.svg";
import Modal from "../../ui-components/Modal";
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
        red={true}
        text="Are you sure you want to delete this posting? This action is irreversible."
      />

      <div className="posting_header">
        <div className="header_text">
          <h1>{props.name}</h1>
          <h3>🏫 {props.institution}</h3>
        </div>

        <div className="apply_button">
          <OutlinedButtom
            icon={Cursor}
            text="See tutors who Applied"
            green={true}
            click={handleView}
          />
        </div>
      </div>
      <hr />
      <div className="posting_content">
        <div className="posting_text">
          <p>
            <span>📚 {t("Subjects")}: </span>

            {props.subjects.join(", ")}
          </p>

          <div className="sub_section">
            <p>
              <span>✏️ Class:</span> {props.class}
            </p>
            <p className="second">
              <span>💸 Salary Range:</span> {props.max_salary}-
              {props.min_salary} Tk/month
            </p>
            <p>
              <span>ℹ️ Other Information:</span> {props.other_info}
            </p>
          </div>
        </div>
        <hr />
        <div className="posting_buttons">
          <div className="other_buttons">
            <OutlinedButtom
              icon={Edit}
              text="Edit or View Posting"
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
