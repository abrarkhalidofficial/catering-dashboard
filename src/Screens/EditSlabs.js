import React, { useEffect } from "react";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";

export default function EditSlabs({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);

  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Slabs</div>
        <div className="container__header__btns">
          <Button label="Create" style={{ marginRight: "1em" }} />
        </div>
      </div>
      <div className="table__container">
        <form style={{ width: "40%" }} className="table__container__wrapper">
          <div className="table__container__heading">Edit Slabs</div>
          <div className="table__container__wrapper__content__left">
            <InputBox placeholder="Rang From" required />
            <InputBox placeholder="Rang To" required />
            <InputBox placeholder="Discount" required />
          </div>
        </form>
      </div>
    </div>
  );
}
