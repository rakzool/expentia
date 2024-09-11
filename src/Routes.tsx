import React from "react";
import { BrowserRouter as Router, Routes as Routing, Route,Navigate, replace } from "react-router-dom";

import LoginPage from "./pages/loginPage/loginPage";



function Routes() {


    return (
        <>
            <Router>
                <Routing>
                    <Route path="/" element={<HomeRoute />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                </Routing>
            </Router>

        </>
    )
}

function HomeRoute() {
    const showLogin:boolean = true;
    return (
        <>
        {
            showLogin?(
                <>
                <Navigate to="/login" replace={true}/>
                </>
            ):(
                <div>
                    This is dashboard
                </div>
            )
        }
        </>
    )
}

export default Routes;