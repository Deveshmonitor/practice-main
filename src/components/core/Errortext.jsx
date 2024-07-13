import React from "react";
import Text from "./Text";

function Errortext(props) {
  return <Text className="text-red-500 mt-2 font-satoshi">{props.error}</Text>;
}

export default Errortext;
