import { Dialog } from "@mui/material";
import Image from "next/image";

const DialogMessage = ({ open, message }) => {
  return (
    <Dialog open={open}>
      <div
        style={{
          padding: "20px",
          fontSize: "18px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          gap: "15px",
          color: "#777",
          userSelect: "none",
        }}
      >
        <Image
          src="/assets/images/icon/check.png"
          alt="success"
          width={80}
          height={80}
        />
        <label>{message}</label>
      </div>
    </Dialog>
  );
};

export default DialogMessage;
