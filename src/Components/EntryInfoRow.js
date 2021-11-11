import React from "react";
import { Link } from "react-router-dom";
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

export default function EntryInfoRow({ tableEntryInfoRow, path }) {
  return (
    <Link to={path ? path : ""} className="entry__info__row">
      {tableEntryInfoRow.map((item, i) => (
        <EntryInfoRowData
          key={i}
          value={item.info}
          variant={
            item.type === "btn" ? "btn" : item.type === "img" ? "img" : null
          }
          label={item.label}
        />
      ))}
    </Link>
  );
}
