import React from "react";
import Text from "./Text";

function Button(props) {
  const { title, onClick, loading, className, ...otherProps } = props;

  return (
    <button
      onClick={onClick}
      disabled={loading}
      type="submit"
      className={`${className}  bg-primary hover:bg-indigo-700 text-white  font-poppins py-2 px-4   focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 `}
      {...otherProps}
    >
      {loading ? (
        <div class="flex justify-center items-center">
          <div class="animate-spin rounded-full h-4 w-4 border-2 border-white  border-gray-900"></div>
        </div>
      ) : (
        <Text className="text-[13px]">{title}</Text>
      )}
    </button>
  );
}

export default Button;
