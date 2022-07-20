import { useSelector, useDispatch } from "react-redux";
import { handleClose } from "../../redux/error";
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

export default function Error() {
  const dispatch = useDispatch();
  const { text, open } = useSelector((state) => state.error);

  return (
    <div className="modal">
      <Modal
        open={open}
        onClose={() => {
          dispatch(handleClose());
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal_box">
          <h1>Something went wrong</h1>
          <p>{text} Please refresh your page and try again.</p>
          <div className="modal_button_container">
            <Button
              text="Okay"
              click={() => {
                dispatch(handleClose());
              }}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
