import React from "react";
import {
  CircularProgress,
  Backdrop,
} from "@mui/material";

const Loading = (props) => {
    const { isLoading } = props;
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading ?? false}
    >
      <CircularProgress color="inherit" size={64}  />
    </Backdrop>
  );
};

export default Loading;
