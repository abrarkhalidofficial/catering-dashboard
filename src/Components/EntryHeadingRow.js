import React from "react";

function EntryHeadingData({ value }) {
  return <div className="table__container__header__entry">{value}</div>;
}
export default function EntryHeadingRow({ tableHeadingEntryRow }) {
  return (
    <div className="table__container__header">
      {tableHeadingEntryRow.map((item) => (
        <EntryHeadingData value={item.heading} />
      ))}
    </div>
  );
}
