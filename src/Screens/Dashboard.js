import React from "react";
import BarChart from "../Components/BarChart";
import Button from "../Components/Button";
import LineChart from "../Components/LineChart";
import PieChart from "../Components/PieChart";
import cardBackground from "../Assets/cardBackground.png";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__header__heading">Dashboard</div>
        <div className="container__header__btns">
          <Button label="Add" style={{ marginRight: "1em" }} />
          <Button label="Delete" variant="secondary" />
        </div>
      </div>
      <div className="dashboard__container">
        <div className="dashboard__container__top">
          <LineChart />
        </div>

        <div className="dashboard__container__bottom">
          <div className="dashboard__container__card dashboard__container__card__primary">
            <img
              src={cardBackground}
              alt="cardBackground"
              className="dashboard__container__card__img"
            />
            <div className="dashboard__container__card__content">
              <div className="dashboard__container__card__heading">
                Total Profit
              </div>
              <div className="dashboard__container__card__value">$12,900</div>
            </div>
          </div>
          <div className="dashboard__container__card dashboard__container__card__secondary">
            <img
              src={cardBackground}
              alt="cardBackground"
              className="dashboard__container__card__img"
            />
            <div className="dashboard__container__card__content">
              <div className="dashboard__container__card__heading">
                Total expense
              </div>
              <div className="dashboard__container__card__value">$12,900</div>
            </div>
          </div>
          <div className="dashboard__container__card dashboard__container__card__chart">
            <div className="dashboard__container__card__chart__heading">
              Traffic
            </div>
            <BarChart />
          </div>
          <div className="dashboard__container__card dashboard__container__card__chart">
            <div className="dashboard__container__card__chart__heading">
              Traffic Sources
            </div>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
