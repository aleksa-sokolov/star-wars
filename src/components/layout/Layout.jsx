import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../../App.style.css";

const Layout = () => {
    return (<>
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
            <Footer/>
        </>);
};

export default Layout;