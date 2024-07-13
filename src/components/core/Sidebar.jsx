import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { theme } from "../../theme/Theme";

function Sidebar({ children, ...props }) {
  const { setToggle, Toggle, label, description } = props;
  return (
    <Drawer anchor={"right"} open={Toggle} onClose={() => setToggle(false)}>
      <Box className="lg:w-96 w-80 dark:bg-boxdark h-max">
        <Box
          style={{
            backgroundColor: theme.palette.primary.main,
            width: "100%",
            padding: 10,
            position: "sticky",
          }}
        >
          <Box
            onClick={() => {
              setToggle(false);
            }}
          >
            <HighlightOffOutlinedIcon
              style={{
                position: "absolute",
                right: 15,
                top: 10,
                color: "white",
              }}
            ></HighlightOffOutlinedIcon>
          </Box>

          <Typography style={{ color: "white", fontSize: 14, fontWeight: 400 }}>
            {label}
          </Typography>
          <Typography
            style={{
              color: "white",
              fontSize: 11,
            }}
          >
            {description}
          </Typography>
        </Box>

        <Box>{children}</Box>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
