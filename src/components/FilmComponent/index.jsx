import React, {useEffect, useState} from 'react';
import {getApiStarWars} from "../../utils/getApiStarWars";
import "./film.style.css";
import {Link} from "react-router-dom";


const FilmComponent = ({id, img}) => {
    const [film, setFilm] = useState();

    console.log(film);
    const getFilm = async (url) => {
        const res = await getApiStarWars(url);
        setFilm(res);
    }

    useEffect(() => {
        getFilm(`https://swapi.dev/api/films/${id.id}/`);
    }, []);


    return (
        <div className="people__wrap">
            <img className="people__img" src={img} alt=""/>
            <Link className="people__close" to="/films">&#215;</Link>
            <ul className="people__lists">
                <li className="people__list"><span>Title: </span>{film && film.title}</li>
                <li className="people__list"><span>Director: </span>{film && film.director}</li>
                <li className="people__list"><span>Producer: </span>{film && film.producer}</li>
                <li className="people__list"><span>Opening_crawl: </span>{film && film.opening_crawl}</li>
            </ul>
        </div>
    );
};

export default FilmComponent;