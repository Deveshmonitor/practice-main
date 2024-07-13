import React from "react";

function Text({ children, className, ...props }) {
  return (
    <p
      onClick={props.onClick}
      className={`font-poppins text-[13px] ${className} `}
      {...props}
    >
      {children}
    </p>
  );
}

export default Text;
