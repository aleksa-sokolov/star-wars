import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./header.style.css";
import logo from "../../../images/logo.svg";
import favorite from "../../../images/favorite.svg";

const Header = () => {
    return (
        <header className="header">
            <Link className="logo" to="/">
                <img src={logo} alt=""/>
            </Link>
            <nav className="nav">
                <ul className="nav__lists">
                    <li className="nav__lists-list">
                        <Link to="/films">Films</Link>
                    </li>
                    <li className="nav__lists-list">
                        <Link to="/characters">Characters</Link>
                    </li>
                    <li className="nav__lists-list">
                        <Link to="/starships">Starships</Link>
                    </li>
                    <li className="nav__lists-list">
                        <Link to="/vehicles">Vehicles</Link>
                    </li>
                    <li className="nav__lists-list">
                        <Link to="/planets">Planets</Link>
                    </li>
                </ul>
            </nav>
            <div className="favorite">
                <p>Favorite characters</p>
                <Link to="/favorite" className="favorite__link">
                    <img className="favorite__img" src={favorite} alt=""/>
                    <span className="favorite__count"></span>
                </Link>
            </div>
        </header>
    );
};

export default Header;