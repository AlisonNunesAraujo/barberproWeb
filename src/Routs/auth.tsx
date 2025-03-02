import Home from "../Pages/Home";
import Login from "../Pages/Login";

import { Routes, Route } from "react-router-dom";
import { Prive } from "./priveRouts";
export function Auth() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Prive><Home /></Prive>} />
        </Routes>

    )
}    