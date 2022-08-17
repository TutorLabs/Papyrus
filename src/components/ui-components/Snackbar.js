import { forwardRef } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { handleClose } from "../../redux/snackbar";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const dispatch = useDispatch();
  const { text, open } = useSelector((state) => state.snackbar);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => {
          dispatch(handleClose());
        }}
      >
        <Alert
          onClose={() => {
            dispatch(handleClose());
          }}
          severity="success"
          sx={{ width: "100%" }}
        >
          {text}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
