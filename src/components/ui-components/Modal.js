import "./Modal.scss";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import RedButton from "../ui-components/RedButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ handleClose, open, handleDelete }) {
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
          <p>
            Are you sure you want to delete this posting? This action is
            irreversible.
          </p>
          <div className="modal_button_container">
            <RedButton text="Delete" click={handleDelete} />
            <p onClick={handleClose}>Cancel</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
