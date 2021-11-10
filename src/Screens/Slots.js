import React from "react";
import Button from "../Components/Button";

export default function Slots() {
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Slots</div>
        <div className="container__header__btns">
          <Button label="Add" style={{ marginRight: "1em" }} />
          <Button label="Delete" variant="secondary" />
        </div>
      </div>
      <div className="slot__container">
        sdfkjsaldkfkjlsaldfjsald;fjsla;dkjflsakdjf;lsajdf;lsjdafl;kj
      </div>
    </div>
  );
}
