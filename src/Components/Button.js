import React from "react";

export default function Button({ label, onClick, variant, type, style }) {
  return (
    <button
      onClick={onClick}
      type={type}
      style={style}
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
