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
import Booking from "./Screens/Booking";

function Main({ isLogedin, setIsLogedin }) {
  return (
    <>
      <NavBar setIsLogedin={setIsLogedin} />
      <Outlet />
    </>
  );
}
function App() {
  const [isLogedin, setIsLogedin] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login setIsLogedin={setIsLogedin} />} />
          <Route
            path="/dashboard"
            element={<Main isLogedin={isLogedin} setIsLogedin={setIsLogedin} />}
          >
            <Route path="" element={<Dashboard />} />
            <Route path="branch" element={<Branch />} />
            <Route path="booking" element={<Booking />} />
            <Route path="employee" element={<Employee />} />
            <Route path="customer" element={<Customer />} />
            <Route path="category" element={<Catagory />} />
            <Route path="items" element={<Items />} />
            <Route path="plans" element={<Plans />} />
            <Route path="slabs" element={<Slabs />} />
            <Route path="slots" element={<Slots />} />
          </Route>
        </Routes>
        <SideBar isLogedin={isLogedin} setIsLogedin={setIsLogedin} />
      </div>
    </BrowserRouter>
  );
}

export default App;
