import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";
import Text from "./Text";
import { makeStyles } from "@mui/styles";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Errortext from "./Errortext";

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
function Dpicker(props) {
  const classes = useStyles();

  return (
    <Box sx={{ width: "auto", marginBlock: 1 }}>
      <Text className="my-2 text-[13px]  font-poppins">{props.label}</Text>
      <DatePicker
        value={props?.value}
        readOnly={props.readOnly}
        defaultValue={props?.defaultValue}
        onChange={props.onChange}
        minDate={props.minDate}
        maxDate={props.maxDate}
        disablePast={props.disablePast}
        disabled={props.disabled}
        format="dd-MM-yyyy"
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

export default Dpicker;
