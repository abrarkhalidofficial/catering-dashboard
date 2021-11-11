import React, { useEffect } from "react";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";

export default function EditSlots({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);

  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Slots</div>
        <div className="container__header__btns">
          <Button label="Save" style={{ marginRight: "1em" }} />
          <Button
            label="Delete"
            variant="secondary"
            style={{ marginRight: "1em" }}
          />
        </div>
      </div>
      <div className="table__container">
        <form style={{ width: "40%" }} className="table__container__wrapper">
          <div className="table__container__heading">Edit Slots</div>
          <InputBox placeholder="Name" required />
          <InputBox placeholder="Max Booking" required />
          <InputBox placeholder="Start Time" required />
        </form>
      </div>
    </div>
  );
}
