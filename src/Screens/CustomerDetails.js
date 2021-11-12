import React, { useEffect } from "react";
import Button from "../Components/Button";
import EntryHeadingRow from "../Components/EntryHeadingRow";
import EntryInfoRow from "../Components/EntryInfoRow";
import InputBox from "../Components/InputBox";

export default function CustomerDetails({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);
  const tableHeadingRow = [
    { heading: "Branch ID" },
    { heading: "Slot ID" },
    { heading: "Date" },
    { heading: "Amount" },
    { heading: "No. of People" },
    { heading: "Time" },
  ];

  const tableInfoRow = [
    { info: "51321" },
    { info: "651023" },
    { info: "12-2-2021" },
    { info: "$245" },
    { info: "321" },
    { info: "02:00 Am to 02:00 PM" },
  ];
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Customer</div>
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
