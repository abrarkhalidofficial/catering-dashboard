import React from "react";
import EntryImg from "../Assets/EntryImg.png";
import Button from "./Button";

function EntryInfoRowData({ value, variant, label }) {
  if (variant === "btn") {
    return (
      <div className="entry__info__row__text">
        <Button label={label} />
      </div>
    );
  } else if (variant === "img") {
    return (
      <div className="entry__info__row__text">
        <img src={EntryImg} alt="" />
      </div>
    );
  } else {
    return <div className="entry__info__row__text">{value}</div>;
  }
}

export default function EntryInfoRow({ tableEntryInfoRow }) {
  return (
    <div className="entry__info__row">
      {tableEntryInfoRow.map((item) => (
        <EntryInfoRowData
          value={item.info}
          variant={
            item.type === "btn" ? "btn" : item.type === "img" ? "img" : null
          }
          label={item.label}
        />
      ))}
    </div>
  );
}
