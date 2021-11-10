import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Dashboard from "./Screens/Dashboard";
import Login from "./Screens/Login";

function Main() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/branch" element={<Dashboard />} />
        <Route path="/employee" element={<Dashboard />} />
        <Route path="/customer" element={<Dashboard />} />
        <Route path="/cateory" element={<Dashboard />} />
        <Route path="/items" element={<Dashboard />} />
        <Route path="/plans" element={<Dashboard />} />
        <Route path="/slabs" element={<Dashboard />} />
        <Route path="/slots" element={<Dashboard />} />
        <Route path="/booking" element={<Dashboard />} />
      </Routes>
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Main />} />
        </Routes>
        <SideBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
