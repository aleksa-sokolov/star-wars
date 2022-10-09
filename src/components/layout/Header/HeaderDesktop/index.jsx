import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../../../images/logo.svg";
import favorite from "../../../../images/favorite.svg";
import {useState} from "react";
import { filtered, getIdICharacters } from '../../../../utils/additionalUtils';
import { AllCharacters } from '../../constants/constants';
import {useSelector} from "react-redux";
import './header.style.css';


const HeaderDesktop = () => {
    const store = useSelector((state) => state);
    const [character, setCharacter] = useState([]);
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
                        <input
                            onChange={(e) =>
                                setCharacter(filtered(AllCharacters, e.target.value))
                            }
                            type="text"
                            placeholder="Search Characters"
                        />
                        {character.length > 0 && (
                            <ul className="nav__search">
                                {character &&
                                    character.map((item) => {
                                        let id = getIdICharacters(item.url);
                                        return (
                                            <li>
                                                <Link
                                                    onClick={(e) => {
                                                        setCharacter([]);
                                                        e.target.value = '';
                                                    }}
                                                    to={`/person-character/${id}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
            <div className="favorite">
                <Link to="/favorite" className="favorite__link">
                    <p>Favorite characters</p>
                    <img className="favorite__img" src={favorite} alt=""/>
                    <span className="favorite__count">
                {store.swappi.favoriteCollection.length}
              </span>
                </Link>
            </div>
        </header>
    );
};

export default HeaderDesktop;