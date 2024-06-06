import React from "react";
import Home from "../pages/Home";
import VizcayaItaim from "../pages/VizcayaItaim";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/VizcayaItaim" element={<VizcayaItaim/>}></Route>
            </Routes>

        </Router>
    )
}

export default AppRoutes;