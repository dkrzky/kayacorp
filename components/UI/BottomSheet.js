import { Dialog, Slide } from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BottomSheet = ({ open, children, onClose }) => {
  return (
    <Dialog
      sx={{
        ".MuiPaper-root": {
          position: "absolute",
          bottom: 0,
          margin: 0,
          width: "100%",
          background: "transparent"
        },
      }}
      fullWidth
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      {children}
    </Dialog>
  );
};

export default BottomSheet;
