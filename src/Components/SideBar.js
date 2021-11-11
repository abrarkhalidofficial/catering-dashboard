import React, { useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { useNavigate } from "react-router-dom";
import IconBtn from "./IconBtn";
import userPic from "../Assets/userPic.png";

function Avatar({ userPic, onClick }) {
  return (
    <button className="avatar__btn" onClick={onClick}>
      <img src={userPic} alt="userPic" className="avatar__btn__img" />
    </button>
  );
}

export default function SideBar({ isLogedin, setIsLogedin }) {
  const navigate = useNavigate();
  const [isInPanel, setIsInPanel] = useState(false);
  const [isOnUserProfile, setIsOnUserProfile] = useState(false);
  const [isOnNotificationPenel, setIsOnNotificationPenel] = useState(false);
  const notifications = [
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Edit New Branch",
      info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
  console.log(isLogedin);
  return (
    <div className="side__bar">
      <div className="side__bar__header">
        <div className="side__bar__header__left">
          {isInPanel ? (
            <IconBtn
              svg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16.828">
                  <g id="arrow-left" transform="translate(-4 -3.586)">
                    <line
                      id="Line_11"
                      data-name="Line 11"
                      x1="14"
                      transform="translate(5 12)"
                      fill="none"
                      stroke="#fb6a3b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      id="Path_9210"
                      data-name="Path 9210"
                      d="M12,19,5,12l7-7"
                      fill="none"
                      stroke="#fb6a3b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              }
              onClick={() => {
                setIsInPanel(false);
                setIsOnNotificationPenel(false);
              }}
            />
          ) : (
            <>
              <IconBtn
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18.183 22.16"
                  >
                    <path
                      id="Icon_material-notifications"
                      data-name="Icon material-notifications"
                      d="M15.091,25.91a2.28,2.28,0,0,0,2.273-2.273H12.819A2.272,2.272,0,0,0,15.091,25.91Zm6.819-6.819V13.41C21.91,9.921,20.046,7,16.8,6.227V5.455a1.7,1.7,0,0,0-3.409,0v.773C10.125,7,8.273,9.909,8.273,13.41v5.682L6,21.365V22.5H24.183V21.365Z"
                      transform="translate(-6 -3.75)"
                      fill="#fb6a3b"
                    />
                  </svg>
                }
                onClick={() => {
                  setIsInPanel(true);
                  setIsOnNotificationPenel(true);
                }}
              />
              <Avatar
                userPic={userPic}
                onClick={() => {
                  setIsInPanel(true);
                }}
              />
            </>
          )}
        </div>
        <ThemeToggleBtn />
      </div>
      <div className="side__bar__content">
        {isLogedin ? (
          <form
            onSubmit={() => {
              navigate("/dashboard");
              setIsLogedin(true);
            }}
            className="side__bar__content__form"
          >
            <div className="side__bar__content__form__logo">Bulevard</div>
            <InputBox
              type="email"
              placeholder="Email Address"
              required
              autoFocus
            />
            <InputBox type="password" placeholder="Password" required />
            <InputBox variant="checkbox" placeholder="Remember" />
            {/* <Button label="Login" variant="secondary" onClick={() => {}} /> */}
            <Button label="Login" type="submit" />
          </form>
        ) : isOnNotificationPenel ? (
          <div className="notification__panel">
            <button className="notification__panel__btn">CLear All</button>
            <div className="notification__panel__content">
              {notifications.map((notification) => (
                <div className="notification__panel__entry">
                  <button className="notification__panel__entry__btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.414"
                      height="5.414"
                      viewBox="0 0 5.414 5.414"
                    >
                      <g id="x" transform="translate(0.307 0.307)">
                        <line
                          id="Line_9"
                          data-name="Line 9"
                          x1="4"
                          y2="4"
                          transform="translate(0.4 0.4)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                        />
                        <line
                          id="Line_10"
                          data-name="Line 10"
                          x2="4"
                          y2="4"
                          transform="translate(0.4 0.4)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                        />
                      </g>
                    </svg>
                  </button>
                  <div className="notification__panel__entry__heading">
                    {notification.title}
                  </div>
                  <div className="notification__panel__entry__info">
                    {notification.info}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
