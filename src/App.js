import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Dashboard from "./Screens/Dashboard";
import Branch from "./Screens/Branch";
import Login from "./Screens/Login";
import Employee from "./Screens/Employee";
import Customer from "./Screens/Customer";
import Catagory from "./Screens/Catagory";
// import Items from "./Screens/Items";
import Plans from "./Screens/Plans";
import Slabs from "./Screens/Slabs";
import Slots from "./Screens/Slots";
import Role from "./Screens/Role";
import Booking from "./Screens/Booking";
import AddRole from "./Screens/AddRole";
import EditRole from "./Screens/EditRole";
import AddSlots from "./Screens/AddSlots";
import EditSlots from "./Screens/EditSlots";
import AddSlabs from "./Screens/AddSlabs";
import EditSlabs from "./Screens/EditSlabs";
import CustomerDetails from "./Screens/CustomerDetails";
import AddBranch from "./Screens/AddBranch";
import EditBranch from "./Screens/EditBranch";
import AddPlan from "./Screens/AddPlan";

function Main({ setIsLogedin, isSmallNav, isLogedin }) {
  return (
    <>
      <NavBar setIsLogedin={setIsLogedin} isSmallNav={isSmallNav} />
      <div className="main" style={isSmallNav ? { maxWidth: "100vw" } : null}>
        <Outlet />
      </div>
      {isSmallNav ? null : (
        <SideBar isLogedin={isLogedin} setIsLogedin={setIsLogedin} />
      )}
    </>
  );
}
function App() {
  const [isLogedin, setIsLogedin] = useState(false);
  const [isSmallNav, setIsSmallNav] = useState(false);
  const [isAddPlanOpen, setIsAddPlanOpen] = useState(true);
  return (
    <BrowserRouter>
      <div className="App">
        {isAddPlanOpen ? <AddPlan closeOnClick={setIsAddPlanOpen} /> : null}
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
              path="add-branch"
              element={<AddBranch setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="edit-branch"
              element={<EditBranch setIsSmallNav={setIsSmallNav} />}
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
              path="customer-details"
              element={<CustomerDetails setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="category"
              element={<Catagory setIsSmallNav={setIsSmallNav} />}
            />
            {/* <Route
              path="items"
              element={<Items setIsSmallNav={setIsSmallNav} />}
            /> */}
            <Route
              path="plans"
              element={<Plans setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="role"
              element={<Role setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="add-role"
              element={<AddRole setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="edit-role"
              element={<EditRole setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="slabs"
              element={<Slabs setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="add-slabs"
              element={<AddSlabs setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="edit-slabs"
              element={<EditSlabs setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="slots"
              element={<Slots setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="add-slots"
              element={<AddSlots setIsSmallNav={setIsSmallNav} />}
            />
            <Route
              path="edit-slots"
              element={<EditSlots setIsSmallNav={setIsSmallNav} />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
