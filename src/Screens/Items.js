import React, { useEffect } from "react";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";

export default function Items({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(false);
  }, []);
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Items</div>
        <div className="container__header__btns">
          <InputBox placeholder="Search" variant="search" />
          <Button label="Add" style={{ marginRight: "1em" }} />
          <Button label="Delete" variant="secondary" />
        </div>
      </div>
      <div className="table__container">
        sdfkjsaldkfkjlsaldfjsald;fjsla;dkjflsakdjf;lsajdf;lsjdafl;kj
      </div>
    </div>
  );
}
