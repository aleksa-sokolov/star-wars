import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/HeaderDesktop";
import Footer from "./Footer";
import "../../App.style.css";

const Layout = () => {
    return (<>
        <div className="container">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>

    </>);
};

export default Layout;