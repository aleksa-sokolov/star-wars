import React, {useState} from 'react';
import "./headerAdaptive.style.css";
import {Link} from "react-router-dom";
import logo from "../../../images/logo.svg";
import ButtonClose from "../ButtonClose";
import ButtonOpen from "../ButtonOpen";
import filtered from "../Header";
import AllCharacters from "../Header";


function OpenMenu() {
    const [character, setCharacter] = useState([]);
    const AllCharacters = [
        {name: 'Luke Skywalker', url: 'https://swapi.dev/api/people/1/'},
        {name: 'C-3PO', url: 'https://swapi.dev/api/people/2/'},
        {name: 'R2-D2', url: 'https://swapi.dev/api/people/3/'},
        {name: 'Darth Vader', url: 'https://swapi.dev/api/people/4/'},
        {name: 'Leia Organa', url: 'https://swapi.dev/api/people/5/'},
        {name: 'Owen Lars', url: 'https://swapi.dev/api/people/6/'},
        {name: 'Beru Whitesun lars', url: 'https://swapi.dev/api/people/7/'},
        {name: 'R5-D4', url: 'https://swapi.dev/api/people/8/'},
        {name: 'Biggs Darklighter', url: 'https://swapi.dev/api/people/9/'},
        {name: 'Obi-Wan Kenobi', url: 'https://swapi.dev/api/people/10/'},
        {name: 'Boba Fett', url: 'https://swapi.dev/api/people/22/'},
        {name: 'IG-88', url: 'https://swapi.dev/api/people/23/'},
        {name: 'Bossk', url: 'https://swapi.dev/api/people/24/'},
        {name: 'Lando Calrissian', url: 'https://swapi.dev/api/people/25/'},
        {name: 'Lobot', url: 'https://swapi.dev/api/people/26/'},
        {name: 'Ackbar', url: 'https://swapi.dev/api/people/27/'},
        {name: 'Mon Mothma', url: 'https://swapi.dev/api/people/28/'},
        {name: 'Arvel Crynyd', url: 'https://swapi.dev/api/people/29/'},
        {name: 'Wicket Systri Warrick', url: 'https://swapi.dev/api/people/30/'},
        {name: 'Nien Nunb', url: 'https://swapi.dev/api/people/31/'},
        {name: 'Anakin Skywalker', url: 'https://swapi.dev/api/people/11/'},
        {name: 'Wilhuff Tarkin', url: 'https://swapi.dev/api/people/12/'},
        {name: 'Chewbacca', url: 'https://swapi.dev/api/people/13/'},
        {name: 'Han Solo', url: 'https://swapi.dev/api/people/14/'},
        {name: 'Greedo', url: 'https://swapi.dev/api/people/15/'},
        {name: 'Jabba Desilijic Tiure', url: 'https://swapi.dev/api/people/16/'},
        {name: 'Wedge Antilles', url: 'https://swapi.dev/api/people/18/'},
        {name: 'Jek Tono Porkins', url: 'https://swapi.dev/api/people/19/'},
        {name: 'Yoda', url: 'https://swapi.dev/api/people/20/'},
        {name: 'Palpatine', url: 'https://swapi.dev/api/people/21/'},
        {name: 'Boba Fett', url: 'https://swapi.dev/api/people/22/'},
        {name: 'IG-88', url: 'https://swapi.dev/api/people/23/'},
        {name: 'Bossk', url: 'https://swapi.dev/api/people/24/'},
        {name: 'Lando Calrissian', url: 'https://swapi.dev/api/people/25/'},
        {name: 'Lobot', url: 'https://swapi.dev/api/people/26/'},
        {name: 'Ackbar', url: 'https://swapi.dev/api/people/27/'},
        {name: 'Mon Mothma', url: 'https://swapi.dev/api/people/28/'},
        {name: 'Arvel Crynyd', url: 'https://swapi.dev/api/people/29/'},
        {name: 'Wicket Systri Warrick', url: 'https://swapi.dev/api/people/30/'},
        {name: 'Nien Nunb', url: 'https://swapi.dev/api/people/31/'},
        {name: 'Qui-Gon Jinn', url: 'https://swapi.dev/api/people/32/'},
        {name: 'Nute Gunray', url: 'https://swapi.dev/api/people/33/'},
        {name: 'Finis Valorum', url: 'https://swapi.dev/api/people/34/'},
        {name: 'Padmé Amidala', url: 'https://swapi.dev/api/people/35/'},
        {name: 'Jar Jar Binks', url: 'https://swapi.dev/api/people/36/'},
        {name: 'Roos Tarpals', url: 'https://swapi.dev/api/people/37/'},
        {name: 'Rugor Nass', url: 'https://swapi.dev/api/people/38/'},
        {name: 'Ric Olié', url: 'https://swapi.dev/api/people/39/'},
        {name: 'Watto', url: 'https://swapi.dev/api/people/40/'},
        {name: 'Sebulba', url: 'https://swapi.dev/api/people/41/'},
        {name: 'Quarsh Panaka', url: 'https://swapi.dev/api/people/42/'},
        {name: 'Shmi Skywalker', url: 'https://swapi.dev/api/people/43/'},
        {name: 'Darth Maul', url: 'https://swapi.dev/api/people/44/'},
        {name: 'Bib Fortuna', url: 'https://swapi.dev/api/people/45/'},
        {name: 'Ayla Secura', url: 'https://swapi.dev/api/people/46/'},
        {name: 'Ratts Tyerel', url: 'https://swapi.dev/api/people/47/'},
        {name: 'Dud Bolt', url: 'https://swapi.dev/api/people/48/'},
        {name: 'Gasgano', url: 'https://swapi.dev/api/people/49/'},
        {name: 'Ben Quadinaros', url: 'https://swapi.dev/api/people/50/'},
        {name: 'Mace Windu', url: 'https://swapi.dev/api/people/51/'},
        {name: 'Ki-Adi-Mundi', url: 'https://swapi.dev/api/people/52/'},
        {name: 'Kit Fisto', url: 'https://swapi.dev/api/people/53/'},
        {name: 'Eeth Koth', url: 'https://swapi.dev/api/people/54/'},
        {name: 'Adi Gallia', url: 'https://swapi.dev/api/people/55/'},
        {name: 'Saesee Tiin', url: 'https://swapi.dev/api/people/56/'},
        {name: 'Yarael Poof', url: 'https://swapi.dev/api/people/57/'},
        {name: 'Plo Koon', url: 'https://swapi.dev/api/people/58/'},
        {name: 'Mas Amedda', url: 'https://swapi.dev/api/people/59/'},
        {name: 'Gregar Typho', url: 'https://swapi.dev/api/people/60/'},
        {name: 'Cordé', url: 'https://swapi.dev/api/people/61/'},
        {name: 'Cliegg Lars', url: 'https://swapi.dev/api/people/62/'},
        {name: 'Poggle the Lesser', url: 'https://swapi.dev/api/people/63/'},
        {name: 'Luminara Unduli', url: 'https://swapi.dev/api/people/64/'},
        {name: 'Barriss Offee', url: 'https://swapi.dev/api/people/65/'},
        {name: 'Dormé', url: 'https://swapi.dev/api/people/66/'},
        {name: 'Dooku', url: 'https://swapi.dev/api/people/67/'},
        {name: 'Bail Prestor Organa', url: 'https://swapi.dev/api/people/68/'},
        {name: 'Jango Fett', url: 'https://swapi.dev/api/people/69/'},
        {name: 'Zam Wesell', url: 'https://swapi.dev/api/people/70/'},
        {name: 'Dexter Jettster', url: 'https://swapi.dev/api/people/71/'},
        {name: 'Lama Su', url: 'https://swapi.dev/api/people/72/'},
        {name: 'Taun We', url: 'https://swapi.dev/api/people/73/'},
        {name: 'Jocasta Nu', url: 'https://swapi.dev/api/people/74/'},
        {name: 'R4-P17', url: 'https://swapi.dev/api/people/75/'},
        {name: 'Wat Tambor', url: 'https://swapi.dev/api/people/76/'},
        {name: 'San Hill', url: 'https://swapi.dev/api/people/77/'},
        {name: 'Shaak Ti', url: 'https://swapi.dev/api/people/78/'},
        {name: 'Grievous', url: 'https://swapi.dev/api/people/79/'},
        {name: 'Tarfful', url: 'https://swapi.dev/api/people/80/'},
        {name: 'Raymus Antilles', url: 'https://swapi.dev/api/people/81/'},
        {name: 'Sly Moore', url: 'https://swapi.dev/api/people/82/'},
        {name: 'Tion Medon', url: 'https://swapi.dev/api/people/83/'},
    ];

    function filtered(array, value) {
        if (!value) {
            return [];
        }
        const tempArray = [];
        const valueArray = value.split("");
        const firstChar = valueArray[0].toUpperCase()
        valueArray[0] = firstChar;
        const changedValue = valueArray.join('');
        array.map((element) => {
            if (element.name.indexOf(changedValue) !== -1) {
                tempArray.push(element);
            }
        });
        return tempArray;
    }

    function getIdICharacters(url) {
        return url.replace("https://swapi.dev/api/people", "").replace(/[^0-9]/g, "");
    }

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
                <input onChange={(e) => setCharacter(filtered(AllCharacters, e.target.value))} type="text"
                       placeholder="Search Characters"/>
                {character.length > 0 && (
                    <ul className="mobile-nav__search">
                        {character && character.map((item) => {
                            let id = getIdICharacters(item.url);
                            return (
                                <li>
                                    <Link onClick={(e) => {
                                        setCharacter([]);
                                        e.target.value = "";
                                    }} to={`/person-character/${id}`}>{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                )}
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
            <nav onClick={() => setOpen(!open)} className="header__mobile-nav">
                {open ? <ButtonClose/> : <ButtonOpen/>}
            </nav>
            {open ? (<OpenMenu/>) : ""}
        </div>
    );
};

export default HeaderAdaptive;