import React from "react";
import Button from "../Components/Button";

export default function Items() {
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Items</div>
        <div className="container__header__btns">
          <Button label="Add" style={{ marginRight: "1em" }} />
          <Button label="Delete" variant="secondary" />
        </div>
      </div>
      <div className="item__container">
        sdfkjsaldkfkjlsaldfjsald;fjsla;dkjflsakdjf;lsajdf;lsjdafl;kj
      </div>
    </div>
  );
}
