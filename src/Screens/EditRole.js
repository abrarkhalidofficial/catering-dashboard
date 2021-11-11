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
          <Button
            label="Create"
            variant="secondary"
            style={{ marginRight: "1em" }}
          />
        </div>
      </div>
      <div className="table__container">
        <form style={{ width: "40%" }} className="table__container__wrapper">
          <div className="table__container__heading">Edit Role</div>
          <InputBox placeholder="Role Name" required autoFocus />
          <InputBox variant="checkbox" placeholder="Manager" />
          <InputBox variant="checkbox" placeholder="Manager" />
          <InputBox variant="checkbox" placeholder="Manager2" />
          <InputBox variant="checkbox" placeholder="Manager3" />
          <InputBox variant="checkbox" placeholder="Manager4" />
          <InputBox variant="checkbox" placeholder="Manager5" />
          <InputBox variant="checkbox" placeholder="Manager6" />
          <InputBox variant="checkbox" placeholder="Manager7" />
        </form>
      </div>
    </div>
  );
}
