import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "../ui-components/Button";
import "./Modal.scss"; // same modal so kept same styling

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 6,
};

export default function TemporaryAcceptModal({ handleClose, open }) {
  return (
    <div className="modal">
      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal_box">
          <h1>Congratulations!</h1>
          <p>Your match request has been successfully sent to the tutor! 🥳</p>
          <div className="modal_button_container">
            <Button
              text="Okay"
              click={() => {
                handleClose();
              }}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
