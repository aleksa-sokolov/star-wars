import React, {useState} from 'react';
import "./headerAdaptive.style.css";
import {Link} from "react-router-dom";
import logo from "../../../images/logo.svg";
import {useSelector} from "react-redux";


function OpenMenu() {
    const store = useSelector(state => state);
    return (
        <ul className="header__mobile-lists">
            <li className="header__mobile-list">
                <Link to="/films">Films</Link>
            </li>
            <li className="header__mobile-list">
                <Link to="/characters">Characters</Link>
            </li>
            <li className="header__mobile-list">
                <div className="header__mobile-list-favorite">
                    <Link to="/favorite" className="header__mobile-list-favorite-link">
                        <p>Favorite characters</p>
                    </Link>
                </div>
            </li>
            <li className="header__mobile-list">
                <input type="text" placeholder="Search Characters"/>
            </li>
        </ul>
    )
}

const HeaderAdaptive = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="header__mobile">
            <Link className="header__mobile-logo" to="/">
                <img src={logo} alt=""/>
            </Link>
            <nav onClick={() => setOpen(!open)} className="header__mobile-nav"></nav>
            {open ? <OpenMenu/> : ""}
        </div>
    );
};

export default HeaderAdaptive;