import React from "react";
import Errortext from "./Errortext";

function TextInput({ className, ...props }) {
  return (
    <div className="my-3 w-full">
      <label className="mb-2 text-[13px]  block text-black font-poppins dark:text-white">
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${className} w-full rounded-lg bg-white text-xs border-[1.5px] border-stroke bg-transparent font-poppins py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={props.name}
        id={props.id}
        readOnly={props.readOnly}
      />
      {props.touched && props.errors ? (
        <Errortext error={props.errors} />
      ) : null}
    </div>
  );
}

export default TextInput;
