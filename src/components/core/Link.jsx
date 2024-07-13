import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Text from "./Text";

function Link({ children, className, ...props }) {
  return (
    <RouterLink to={props.to} className={`${className}  py-1`} {...props}>
      <Text className="text-center text-primary text-[14px] font-poppins font-title">
        {props.title}
      </Text>
    </RouterLink>
  );
}

export default Link;
