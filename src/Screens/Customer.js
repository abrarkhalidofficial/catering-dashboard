import React from "react";
import Button from "../Components/Button";

export default function Customer() {
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Customers</div>
        <div className="container__header__btns">
          <Button label="Add" style={{ marginRight: "1em" }} />
          <Button label="Delete" variant="secondary" />
        </div>
      </div>
      <div className="customer__container">
        sdfkjsaldkfkjlsaldfjsald;fjsla;dkjflsakdjf;lsajdf;lsjdafl;kj
      </div>
    </div>
  );
}
