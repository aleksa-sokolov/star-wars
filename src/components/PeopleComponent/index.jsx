import React, {useEffect, useState} from 'react';
import "./peopleComponent.style.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addFavoritePeople, removeFavoritePeople} from "../../redux/slice/swappiSlice";

const PeopleComponent = ({people, img, urlPeople}) => {
    const {birth_year, hair_color, height, mass, name, gender, skin_color} = people;
    const dispatch = useDispatch();

    const firstCoinState = useSelector((state) => state.swappi.favoriteCollection);
    console.log(firstCoinState);


    function checkFavoritePeople(arr, obj) {
        const found = arr.find(element => element.name === obj.name)
        if (found === undefined) {
            return false;
        } else {
            return true;
        }
    }


    function deleteFavoritePeople(people) {
        dispatch(removeFavoritePeople(people));
    }


    function handleFavoritePeople(people) {
        localStorage.setItem("favorite",dispatch(addFavoritePeople(people)));
    }

    return (<div className="people">
        <Link className="people__closes" to="/characters">&#215;</Link>
        <div className="people__wrap">
            <img className="people__img" src={img} alt=""/>
            <ul className="people__lists">
                <li className="people__list"><span>Name: </span>{name}</li>
                <li className="people__list"><span>Birth Year: </span>{birth_year}</li>
                <li className="people__list"><span>Height: </span>{height}</li>
                <li className="people__list"><span>Mass: </span>{mass}</li>
                <li className="people__list"><span>Gender: </span>{gender}</li>
                <li className="people__list"><span>Hair Color: </span>{hair_color}</li>
                <li className="people__list"><span>Skin Color: </span>{skin_color}</li>
                <li className="people__list">
                    {checkFavoritePeople(firstCoinState, people) ?
                        <button onClick={() => deleteFavoritePeople(people)}>Удалить из избранного</button> :
                        <button onClick={() => handleFavoritePeople(people)}>Добавить в избранное</button>}
                </li>
            </ul>
        </div>
    </div>);
};

export default PeopleComponent;