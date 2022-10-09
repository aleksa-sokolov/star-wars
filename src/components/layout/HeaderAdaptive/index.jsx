import React, { useState } from 'react';
import './headerAdaptive.style.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import ButtonClose from '../ButtonClose';
import ButtonOpen from '../ButtonOpen';
import { AllCharacters } from '../constants/constants';
import { filtered, getIdICharacters } from '../../../utils/additionalUtils';

function OpenMenu({ setOpen }) {
  const [character, setCharacter] = useState([]);
  return (
    <ul className="header__mobile-lists">
      <li className="header__mobile-list">
        <Link
          onClick={() => {
            setOpen(false);
          }}
          to="/films"
        >
          Films
        </Link>
      </li>
      <li className="header__mobile-list">
        <Link
          onClick={() => {
            setOpen(false);
          }}
          to="/characters"
        >
          Characters
        </Link>
      </li>
      <li className="header__mobile-list">
        <div className="header__mobile-list-favorite">
          <Link
            onClick={() => {
              setOpen(false);
            }}
            to="/favorite"
            className="header__mobile-list-favorite-link"
          >
            <p>Favorite characters</p>
          </Link>
        </div>
      </li>
      <li className="header__mobile-list">
        <input
          onChange={(e) =>
            setCharacter(filtered(AllCharacters, e.target.value))
          }
          type="text"
          placeholder="Search Characters"
        />
        {character.length > 0 && (
          <ul className="mobile-nav__search">
            {character &&
              character.map((item) => {
                let id = getIdICharacters(item.url);
                return (
                  <li>
                    <Link
                      onClick={(e) => {
                        setOpen(false);
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
  );
}

const HeaderAdaptive = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header__mobile">
      <Link className="header__mobile-logo" to="/">
        <img src={logo} alt="" />
      </Link>
      <nav onClick={() => setOpen(!open)} className="header__mobile-nav">
        {open ? <ButtonClose /> : <ButtonOpen />}
      </nav>
      {open ? <OpenMenu setOpen={setOpen} /> : ''}
    </div>
  );
};

export default HeaderAdaptive;
