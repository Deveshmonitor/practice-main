import React from "react";
import { Backdrop } from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const Modal = ({ toggle, setToggle, children, title }) => {
  return (
    <Backdrop
      className="flex flex-1 justify-center items-center relative"
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={toggle}
      // Set to true to show the backdrop, or use a state variable
    >
      <div className="lg:w-6/12 w-full mx-auto bg-white p-5 relative">
        <div
          onClick={() => {
            setToggle(false);
          }}
        >
          <HighlightOffOutlinedIcon
            style={{
              position: "absolute",
              right: 15,
              top: 10,
              color: "gray",
            }}
          ></HighlightOffOutlinedIcon>
        </div>
        <p className="text-black font-bold">{title}</p>
        {children}
      </div>
    </Backdrop>
  );
};

export default Modal;
