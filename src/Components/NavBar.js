import React from "react";
import { useNavigate } from "react-router-dom";
import navBar from "../Assets/navBar.png";
function NavBarLink({ svg, title, path, defaultChecked }) {
  const navigate = useNavigate();
  return (
    <div className="nav__bar__content__link">
      <input
        defaultChecked={defaultChecked}
        type="radio"
        name="nav__bar__content__link__input"
        id="nav__bar__content__link__input"
        className="nav__bar__content__link__input"
        onChange={() => {
          navigate(path);
        }}
      />
      <div className="nav__bar__content__link__content">
        {svg}
        {title}
      </div>
    </div>
  );
}
export default function NavBar() {
  return (
    <div className="nav__bar">
      <img src={navBar} alt="navBar" className="nav__bar__img" />
      <div className="nav__bar__content">
        <div className="side__bar__content__form__logo">Bulevard</div>
        <div className="nav__bar__content__links">
          <NavBarLink
            path="/dashboard"
            title="Dashboard"
            defaultChecked
            svg={
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
            }
          />
          <NavBarLink
            path="/dashboard/branch"
            title="Branch"
            svg={
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
            }
          />
          <NavBarLink
            path="/dashboard/employee"
            title="Employee"
            svg={
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
            }
          />
          <NavBarLink
            path="/dashboard/employee"
            title="Employee"
            svg={
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
            }
          />
          <NavBarLink
            path="/dashboard/employee"
            title="Employee"
            svg={
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
            }
          />
          <NavBarLink
            path="/dashboard/employee"
            title="Employee"
            svg={
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
            }
          />
          <NavBarLink
            path="/dashboard/employee"
            title="Employee"
            svg={
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
            }
          />
          <NavBarLink
            path="/dashboard/employee"
            title="Employee"
            svg={
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
            }
          />
          <NavBarLink
            path="/dashboard/employee"
            title="Employee"
            svg={
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
            }
          />
          <NavBarLink
            path="/dashboard/employee"
            title="Employee"
            svg={
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
            }
          />
          <NavBarLink
            path="/dashboard/employee"
            title="Employee"
            svg={
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
            }
          />
        </div>
        <div className="nav__bar__content__logout">
          <NavBarLink
            path="/"
            title="Logout"
            svg={
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 22"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
