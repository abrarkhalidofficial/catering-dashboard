import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";
import placeholderImg from "../Assets/placeholderImg.png";
import EntryHeadingRow from "../Components/EntryHeadingRow";
import EntryInfoRow from "../Components/EntryInfoRow";
function PlanCard({ defaultChecked, setIsEditPlanOpen }) {
  return (
    <div className="plans__card">
      <input
        defaultChecked={defaultChecked}
        type="radio"
        name="plans__card__input"
        className="plans__card__input"
      />
      <div className="plans__card__content">
        <div className="plans__card__content__info">
          <div className="plans__card__content__info__heading">Name</div>
          <div className="plans__card__content__info__value">Bilal house</div>
        </div>
        <div className="plans__card__content__info">
          <div className="plans__card__content__info__heading">Price</div>
          <div className="plans__card__content__info__value">$45</div>
        </div>
        <div className="plans__card__content__info">
          <div className="plans__card__content__info__heading">Branch</div>
          <div className="plans__card__content__info__value">Main</div>
        </div>
        <div className="catagory__card__btns">
          <button
            className="catagory__card__content__btns__btn catagory__card__content__btns__primary"
            onClick={() => {
              setIsEditPlanOpen(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.362 11.482">
              <path
                id="edit-2"
                d="M9.839,2.6a1.478,1.478,0,0,1,2.09,2.09L4.874,11.749,2,12.533l.784-2.874Z"
                transform="translate(-1.5 -1.552)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
            </svg>
          </button>
          <button className="catagory__card__content__btns__btn catagory__card__content__btns__secondary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.674 13.971">
              <g id="trash-2" transform="translate(0.5 0.5)">
                <path
                  id="Path_9212"
                  data-name="Path 9212"
                  d="M3,6H14.674"
                  transform="translate(-3 -3.406)"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
                <path
                  id="Path_9213"
                  data-name="Path 9213"
                  d="M14.08,4.594v9.08a1.3,1.3,0,0,1-1.3,1.3H6.3a1.3,1.3,0,0,1-1.3-1.3V4.594m1.946,0V3.3A1.3,1.3,0,0,1,8.243,2h2.594a1.3,1.3,0,0,1,1.3,1.3v1.3"
                  transform="translate(-3.703 -2)"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
                <line
                  id="Line_18"
                  data-name="Line 18"
                  y2="3.948"
                  transform="translate(4.737 5.866)"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
                <line
                  id="Line_19"
                  data-name="Line 19"
                  y2="3.948"
                  transform="translate(7.105 5.866)"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
function ItemCard({ defaultChecked }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="plans__card">
      <input
        type="radio"
        className="plans__card__input"
        checked={checked}
        onClick={(e) => {
          checked ? setChecked(false) : setChecked(true);
        }}
      />
      <div className="plans__card__content">
        <img
          src={placeholderImg}
          alt="item__img"
          className="plans__card__content__img"
        />
        <div className="plans__card__content__info">
          <div className="plans__card__content__info__heading">Name</div>
          <div className="plans__card__content__info__value">Bilal house</div>
        </div>
        <div className="plans__card__content__info">
          <div className="plans__card__content__info__heading">Price</div>
          <div className="plans__card__content__info__value">$45</div>
        </div>
      </div>
    </div>
  );
}
export default function Plans({
  setIsSmallNav,
  setIsAddPlanOpen,
  setIsEditPlanOpen,
}) {
  useEffect(() => {
    setIsSmallNav(true);
  }, []);
  const tableHeadingRow = [
    { heading: "" },
    { heading: "Name" },
    { heading: "Time" },
    { heading: "Max Booking" },
    { heading: "Booked" },
  ];

  const tableInfoRow = [
    { type: "btn", label: "Edit" },
    { info: "Fahad" },
    { info: "12:00 AM to 2:00 PM" },
    { info: "1234" },
    { info: "321" },
  ];
  return (
    <div className="container__wrapper">
      <div className="container">
        <div className="container__header">
          <div className="container__header__heading">Plans</div>
          <div className="container__header__btns">
            <Button
              label="Add"
              onClick={() => {
                setIsAddPlanOpen(true);
              }}
            />
          </div>
        </div>
        <InputBox
          placeholder="Search"
          variant="search"
          style={{ marginLeft: "1.5em", height: "45px" }}
        />
        <div className="container__data">
          <PlanCard
            defaultChecked={true}
            setIsEditPlanOpen={setIsEditPlanOpen}
          />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
          <PlanCard setIsEditPlanOpen={setIsEditPlanOpen} />
        </div>
      </div>
      <div className="container" style={{ width: "55%" }}>
        <div className="container__header">
          <div
            className="container__header__heading"
            style={{ margin: ".5em 0em" }}
          >
            Plan Details
          </div>
        </div>
        <div className="container__details">
          <div className="container__details__heading__wrapper">
            <div className="container__details__heading">Name</div>
            <div className="container__details__heading">Price</div>
            <div className="container__details__heading">Catagory</div>
            <div className="container__details__heading">Branch</div>
            <div className="container__details__heading">Slab</div>
            <div className="container__details__heading">Discription</div>
          </div>
          <div className="container__details__plan__detail__wrapper">
            <div className="container__details__heading plan__detail__bold">
              Fahad Ayyaz
            </div>
            <div className="container__details__heading plan__detail__bold">
              $57
            </div>
            <div className="container__details__heading plan__detail__bold">
              Fast Food
            </div>
            <div className="container__details__heading plan__detail__bold">
              Bilal House
            </div>
            <div className="container__details__heading plan__detail__bold">
              500
            </div>
            <a className="container__details__heading__discription__tag">
              View Discription
              <div className="container__details__heading__discription__box">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.It
                is a long established.
              </div>
            </a>
          </div>
        </div>
        <div className="table__container">
          <EntryHeadingRow tableHeadingEntryRow={tableHeadingRow} />
          <div>
            {tableInfoRow.map((item, i) => (
              <div className="entry__info__row">
                <div style={{ width: "200px" }}>
                  <Button label={"Edit"} path={item.path} />
                </div>

                <div style={{ width: "200px" }}>{"item.info"}</div>

                <div style={{ width: "200px" }}>
                  {"Makaan No.2 Iqbal colony Lahore"}
                </div>
                <div style={{ width: "200px" }}>{"item.info"}</div>
                <div style={{ width: "200px" }}>{"item.info"}</div>
              </div>
            ))}
          </div>
          {/* <div className="table__container__content">
            <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
            <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
            <EntryInfoRow tableEntryInfoRow={tableInfoRow} />
          </div> */}
        </div>
      </div>
      <div className="container" style={{ maxWidth: "25%" }}>
        <div className="container__header">
          <div
            className="container__header__heading"
            style={{ margin: ".5em 0em" }}
          >
            Items
          </div>
        </div>
        <InputBox
          placeholder="Search"
          variant="search"
          style={{ marginLeft: "1.5em", height: "45px" }}
        />
        <InputBox
          placeholder="Catagory"
          variant="dropdown"
          style={{ marginLeft: "1.5em", marginBottom: ".5em" }}
        />
        <InputBox
          placeholder="Sub Catagory"
          variant="dropdown"
          isMulti
          style={{ marginLeft: "1.5em", marginBottom: ".5em" }}
        />
        <div className="container__data" style={{ maxHeight: "78%" }}>
          <ItemCard defaultChecked={true} />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard defaultChecked={true} />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
}
