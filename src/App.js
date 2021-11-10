import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Dashboard from "./Screens/Dashboard";
import Branch from "./Screens/Branch";
import Login from "./Screens/Login";

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
            <Route path="employee" element={<Dashboard />} />
            <Route path="customer" element={<Dashboard />} />
            <Route path="cateory" element={<Dashboard />} />
            <Route path="items" element={<Dashboard />} />
            <Route path="plans" element={<Dashboard />} />
            <Route path="slabs" element={<Dashboard />} />
            <Route path="slots" element={<Dashboard />} />
            <Route path="booking" element={<Dashboard />} />
          </Route>
        </Routes>
        <SideBar isLogedin={isLogedin} setIsLogedin={setIsLogedin} />
      </div>
    </BrowserRouter>
  );
}

export default App;
