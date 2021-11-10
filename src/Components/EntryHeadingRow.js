import React from "react";

function EntryHeadingData({ value }) {
  return <div className="entry__heading__row__text">{value}</div>;
}
export default function EntryHeadingRow({ tableHeadingEntryRow }) {
  return (
    <div className="entry__heading__row">
      {tableHeadingEntryRow.map((item) => (
        <EntryHeadingData value={item.heading} />
      ))}
    </div>
  );
}
