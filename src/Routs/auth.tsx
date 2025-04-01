import Home from "../Pages/Home";
import Login from "../Pages/Login";

import { Routes, Route } from "react-router-dom";
import { Prive } from "./priveRouts";
import Profile from "../Pages/Profile";
import ViewRegister from "../Pages/ViewAgendas";
import Menu from "../Pages/Menu";
export function Auth() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/Profile"
        element={
          <Prive>
            <Profile />
          </Prive>
        }
      />
      <Route
        path="/Home"
        element={
          <Prive>
            <Home />
          </Prive>
        }
      />
      <Route
        path="/ViewRegister"
        element={
          <Prive>
            <ViewRegister />
          </Prive>
        }
      />
      <Route
      path="/menu"
      element={<Prive><Menu/></Prive>}
      />
    </Routes>
  );
}
