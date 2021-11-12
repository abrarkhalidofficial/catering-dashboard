import React, { useEffect } from "react";
import Button from "../Components/Button";
import EntryHeadingRow from "../Components/EntryHeadingRow";
import EntryInfoRow from "../Components/EntryInfoRow";
import InputBox from "../Components/InputBox";

export default function Customer({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);
  const tableHeadingRow = [
    { heading: "Profile" },
    { heading: "Name" },
    { heading: "Last Name" },
    { heading: "Email" },
    { heading: "Phone" },
  ];

  const tableInfoRow = [
    { type: "img" },
    { info: "Fahad" },
    { info: "Ayyaz" },
    { info: "abc123@gmail.com" },
    { info: "0321-3741371" },
  ];
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Customer</div>
        <div className="container__header__btns">
          <InputBox placeholder="Search" variant="search" />
          <Button label="Add" style={{ marginRight: "1em" }} />
          <Button label="Delete" variant="secondary" />
        </div>
      </div>
      <div className="table__container">
        <EntryHeadingRow tableHeadingEntryRow={tableHeadingRow} />
        <div className="table__container__content">
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
    </div>
  );
}
