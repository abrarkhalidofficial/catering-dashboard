import React from "react";

export default function Button({ label, onClick, variant, type }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        variant === "secondary"
          ? "button button__secondary"
          : "button button__primary"
      }
    >
      {label}
    </button>
  );
}
