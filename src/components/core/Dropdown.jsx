import React from "react";
import Errortext from "./Errortext";

function DropdownSelect(props) {
  return (
    <div className="w-auto my-2">
      <label className="mb-2 text-[13px]  block text-black font-poppins dark:text-white">
        {props.label}
      </label>
      <select
        value={props.value === "" ? "Select" : props.value}
        name={props.name}
        id={props.id}
        sx={{ width: "100%", height: 45 }}
        className={` w-full rounded-lg text-xs border-[1.5px] bg-white border-stroke bg-transparent font-poppins  py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${props.className}`}
        readOnly={props.readOnly}
        disabled={props.disabled}
        onBlur={props.onBlur}
        onChange={props.onChange}
      >
        <option value="Select" disabled>
          {props.defaultValue}
        </option>

        {props?.options?.map((value, index) => {
          return (
            <option value={parseInt(value["id"], 10)} key={index}>
              {(value["name"] ?? "").toString()}
            </option>
          );
        })}
      </select>
      {props.errors && props.touched ? (
        <Errortext error={props.errors} />
      ) : null}
    </div>
  );
}

export default DropdownSelect;
