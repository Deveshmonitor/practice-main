import React from "react";
import { Box } from "@mui/material";
import Text from "./Text";
import { makeStyles } from "@mui/styles";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Errortext from "./Errortext";
import { TimePicker } from "@mui/x-date-pickers";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-input": {
      border: 0,
      borderRadius: 3,
      fontSize: 12,
      height: 25,
    },
  },
});
function Tpicker(props) {
  const classes = useStyles();

  return (
    <Box sx={{ width: "auto", marginBlock: 1 }}>
      <Text style={{ fontWeight: 500 }}>{props.label}</Text>
      <TimePicker
        value={props?.value}
        readOnly={props.readOnly}
        defaultValue={props?.defaultValue}
        onChange={(value) => {
          const date = new Date(value);
          const timeString = date.toLocaleTimeString("en-IN", {
            hour12: false,
          });
          props.onChange(timeString);
        }}
        minDate={props.minDate}
        maxDate={props.maxDate}
        disablePast={props.disablePast}
        disabled={props.disabled}
        className={classes.root}
        sx={{ width: "100%" }}
        slots={{
          openPickerIcon: CalendarMonthOutlinedIcon,
        }}
        slotProps={{
          textField: { size: "small", placeholder: props?.placeholder },
        }}
      />

      {props.touched && props.errors ? (
        <Errortext error={props.errors} />
      ) : null}
    </Box>
  );
}

export default Tpicker;
