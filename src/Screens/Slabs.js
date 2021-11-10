import React from "react";
import Button from "../Components/Button";
import EntryHeadingRow from "../Components/EntryHeadingRow";
import EntryInfoRow from "../Components/EntryInfoRow";

export default function Slabs() {
  const tableHeadingRow = [
    { heading: "" },
    { heading: "Name" },
    { heading: "Time" },
    { heading: "Max Booking" },
    { heading: "Booked" },
  ];

  const tableInfoRow = [
    { type: "btn", label: "Edit" },
    { info: "Fahad" },
    { info: "12:00 AM to 2:00 PM" },
    { info: "1234" },
    { info: "321" },
  ];
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Slabs</div>
        <div className="container__header__btns">
          <Button label="Add" style={{ marginRight: "1em" }} />
          <Button label="Delete" variant="secondary" />
        </div>
      </div>
      <div className="table__container">
        <EntryHeadingRow tableHeadingEntryRow={tableHeadingRow} />
        <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
        <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
        <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
        <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
        <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
        <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
        <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
        <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
      </div>
    </div>
  );
}
