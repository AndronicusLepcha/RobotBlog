import React from "react";

function Button({
  childern,
  type = "button",
  bgColor = "bg-blue",
  textColor = "text-white",
  clasName = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${clasName} ${type} ${bgColor} ${textColor}`}
      {...props}
    >
      {childern}
    </button>
  );
}

export default Button;
