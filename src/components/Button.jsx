import React from "react";

export default function Button({
  label,
  onClick,
  variant = "primary",
  className = "",
}) {
  const baseClass = "rounded-md font-medium transition-colors duration-300";

  const variantClass = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    disabled: "bg-gray-400 text-gray-200 cursor-not-allowed",
  };

  return (
    <button
      className={`${baseClass} ${variantClass[variant]} ${className}`}
      onClick={variant !== "disabled" ? onClick : undefined}
      disabled={variant === "disabled"}
    >
      {label}
    </button>
  );
}
