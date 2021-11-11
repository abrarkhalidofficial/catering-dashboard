import React from "react";

export default function IconBtn({ svg, onClick }) {
  return (
    <button className="icon__btn" onClick={onClick}>
      {svg}
    </button>
  );
}
