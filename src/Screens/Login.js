import React from "react";
import SideBar from "../Components/SideBar";
import loginImg from "../Assets/loginImg.png";

export default function Login() {
  return (
    <div className="login__container">
      <div className="login__container__img__wrapper"></div>
      <img src={loginImg} alt="loginImg" className="login__container__img" />
      <SideBar isOnLogin />
    </div>
  );
}
