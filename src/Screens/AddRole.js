import React, { useEffect } from "react";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";

export default function AddRole({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);

  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Role</div>
        <div className="container__header__btns">
          <Button label="Create" style={{ marginRight: "1em" }} />
        </div>
      </div>
      <div className="table__container">
        <form className="table__container__wrapper">
          <div className="table__container__heading">Add New Role</div>
          <div className="table__container__wrapper__content__left">
            <InputBox placeholder="Role Name" required />
            <InputBox id="1" variant="checkbox" placeholder="Manager" />
            <InputBox variant="checkbox" placeholder="Manager" />
            <InputBox variant="checkbox" placeholder="Manager2" />
            <InputBox variant="checkbox" placeholder="Manager3" />
            <InputBox variant="checkbox" placeholder="Manager4" />
            <InputBox variant="checkbox" placeholder="Manager5" />
            <InputBox variant="checkbox" placeholder="Manager6" />
            <InputBox variant="checkbox" placeholder="Manager7" />
          </div>
        </form>
      </div>
    </div>
  );
}
