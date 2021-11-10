import React from "react";

export default function NavBar() {
  return (
    <div className="nav__bar">
      <img src="" alt="" className="nav__bar__img" />
      <div className="nav__bar__content">
        <div className="nav__bar__content__logo">Bulevard</div>
        <div className="nav__bar__content__links">
          <Link to="/dashbaord">Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
