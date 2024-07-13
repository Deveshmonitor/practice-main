import { TableCell } from "@mui/material";
import React from "react";

function TabCell({ children, ...props }) {
  return (
    <TableCell align="center" className="text-[13px]" {...props}>
      {children}
    </TableCell>
  );
}

export default TabCell;
