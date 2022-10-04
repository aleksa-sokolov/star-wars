import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./header.style.css";
import logo from "../../../images/logo.svg";
import favorite from "../../../images/favorite.svg";
import {useSelector} from "react-redux";

const Header = () => {
    const [count, setCount] = useState();
    const store = useSelector(state => state);

    console.log(localStorage.getItem("favorite"));
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
                        <input type="text" placeholder="Search Characters"/>
                    </li>
                    {/*<li className="nav__lists-list">*/}
                    {/*    <Link to="/starships">Starships</Link>*/}
                    {/*</li>*/}
                    {/*<li className="nav__lists-list">*/}
                    {/*    <Link to="/vehicles">Vehicles</Link>*/}
                    {/*</li>*/}
                    {/*<li className="nav__lists-list">*/}
                    {/*    <Link to="/planets">Planets</Link>*/}
                    {/*</li>*/}
                </ul>
            </nav>
            <div className="favorite">
                <Link to="/favorite" className="favorite__link">
                    <p>Favorite characters</p>
                    <img className="favorite__img" src={favorite} alt=""/>
                    <span className="favorite__count">{store.swappi.favoriteCollection.length}</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;