import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Dashboard from "./Screens/Dashboard";
import Branch from "./Screens/Branch";
import Login from "./Screens/Login";
import Employee from "./Screens/Employee";
import Customer from "./Screens/Customer";
import Catagory from "./Screens/Catagory";
import Items from "./Screens/Items";
import Plans from "./Screens/Plans";
import Slabs from "./Screens/Slabs";
import Slots from "./Screens/Slots";
import Role from "./Screens/Role";
import Booking from "./Screens/Booking";

function Main({ setIsLogedin, isSmallNav }) {
  return (
    <>
      <NavBar setIsLogedin={setIsLogedin} isSmallNav={isSmallNav} />
      <Outlet />
    </>
  );
}
function App() {
  const [isLogedin, setIsLogedin] = useState(false);
  const [isOnUserProfile, setIsOnUserProfile] = useState(false);
  const [isSmallNav, setIsSmallNav] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login setIsLogedin={setIsLogedin} />} />
          <Route
            path="/dashboard"
            element={
              <Main
                isLogedin={isLogedin}
                setIsLogedin={setIsLogedin}
                isSmallNav={isSmallNav}
              />
            }
          >
            <Route
              path=""
              element={<Dashboard setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="branch"
              element={<Branch setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="booking"
              element={<Booking setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="employee"
              element={<Employee setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="customer"
              element={<Customer setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="category"
              element={<Catagory setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="items"
              element={<Items setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="plans"
              element={<Plans setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="role"
              element={<Role setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="slabs"
              element={<Slabs setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="slots"
              element={<Slots setIsSmallNav={setIsSmallNav} />}
            />
          </Route>
        </Routes>
        {isSmallNav ? null : (
          <SideBar
            isLogedin={isLogedin}
            setIsLogedin={setIsLogedin}
            isOnUserProfile={isOnUserProfile}
            setIsOnUserProfile={setIsOnUserProfile}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
