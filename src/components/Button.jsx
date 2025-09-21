import React from "react";

export default function Button({ label, onClick, primary }) {
  return (
    <button
      className={`px-4 py-2 rounded-md ${
        primary ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
