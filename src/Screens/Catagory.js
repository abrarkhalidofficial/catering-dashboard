import React, { useEffect } from "react";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";
function CatagoryCard() {
  return <div className=""></div>;
}
function SubCatagoryCard() {
  return <div className=""></div>;
}
function ItemCard() {
  return <div className=""></div>;
}
export default function Catagory({ setIsSmallNav }) {
  useEffect(() => {
    setIsSmallNav(true);
  }, []);
  return (
    <div className="container__wrapper">
      <div className="container">
        <div className="container__header">
          <div className="container__header__heading">Catagories</div>
          <div className="container__header__btns">
            <Button label="Add" />
          </div>
        </div>
        <InputBox
          placeholder="Search"
          variant="search"
          style={{ marginLeft: "1.5em", height: "45px" }}
        />
        <div className="container__data">
          <CatagoryCard />
        </div>
      </div>
      <div className="container">
        <div className="container__header">
          <div className="container__header__heading">Catagories</div>
          <div className="container__header__btns">
            <Button label="Add" />
          </div>
        </div>
        <InputBox
          placeholder="Search"
          variant="search"
          style={{ marginLeft: "1.5em", height: "45px" }}
        />
        <div className="container__data">
          <SubCatagoryCard />
        </div>
      </div>
      <div className="container">
        <div className="container__header">
          <div className="container__header__heading">Catagories</div>
          <div className="container__header__btns">
            <Button label="Add" />
          </div>
        </div>
        <InputBox
          placeholder="Search"
          variant="search"
          style={{ marginLeft: "1.5em", height: "45px" }}
        />
        <div className="container__data">
          <ItemCard />
        </div>
      </div>
      <div className="container">
        <div className="container__header">
          <div className="container__header__heading">Catagories</div>
          <div className="container__header__btns">
            <Button label="Add" />
          </div>
        </div>
        <InputBox
          placeholder="Search"
          variant="search"
          style={{ marginLeft: "1.5em", height: "45px" }}
        />
        <div className="table__container">
          sdfkjsaldkfkjlsaldfjsald;fjsla;dkjflsakdjf;lsajdf;lsjdafl;kj
        </div>
      </div>
    </div>
  );
}
