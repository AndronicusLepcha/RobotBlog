import React from "react";

function Button({
  children, // Corrected typo from 'childern' to 'children'
  type = "button", // Default HTML button type
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "", 
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${type} ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
