import React from "react";
import Button from "../Components/Button";
import EntryHeadingRow from "../Components/EntryHeadingRow";
import EntryInfoRow from "../Components/EntryInfoRow";

export default function Employee() {
  const tableHeadingRow = [
    { heading: "Profile" },
    { heading: "Name" },
    { heading: "Last Name" },
    { heading: "Email" },
    { heading: "Phone" },
    { heading: "Role" },
    { heading: "CNIC" },
  ];

  const tableInfoRow = [
    { type: "img" },
    { info: "Fahad" },
    { info: "Ayyaz" },
    { info: "abc123@gmail.com" },
    { info: "0321-3741371" },
    { info: "Manager" },
    { info: "33105-123456-2" },
  ];
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Employee</div>
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
