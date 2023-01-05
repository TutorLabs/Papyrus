import "./Modal.scss";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import RedButton from "../ui-components/RedButton";
import GreenButton from "../ui-components/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  handleClose,
  open,
  red,
  handleUpload,
  handleDelete,
  text,
}) {
  return (
    <div className="modal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal_box">
          <h1> Are you sure?</h1>
          <p>{text}</p>
          <div className="modal_button_container">
            {red ? (
              <RedButton text="Delete" click={handleDelete} />
            ) : (
              <GreenButton text="Okay" click={handleUpload} />
            )}
            <p onClick={handleClose}>Cancel</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
