import React, {useEffect, useState} from 'react';
import {getApiStarWars} from "../../utils/getApiStarWars";
import "./films.style.css";
import {Link} from "react-router-dom";
import SkeletonCard from "../Skeleton/SkeletonCards";


const FilmsComponent = () => {
    const [films, setFilms] = useState();
    const getFilms = async (url) => {
        const res = await getApiStarWars(url);
        const films = res.results.map(({created, director, episode_id, release_date, title, url}) => {
            return {
                created,
                director,
                episode_id,
                release_date,
                title,
                url
            }
        });
        setFilms(films);
    };

    function getIdICharacters(url) {
        return url.replace("https://swapi.dev/api/films", "").replace(/[^0-9]/g, "");
    }


    useEffect(() => {
        getFilms("https://swapi.dev/api/films");
    }, []);

    let urlImage = "https://starwars-visualguide.com/assets/img/films/";


    return (
        <div className="films">
            <div className="films__wrapper">
                {!films && <SkeletonCard/>}
                {films && films.map(({title, id, url}, index) => {
                        let idPerson = getIdICharacters(url);
                        return (
                            <Link key={index} to={`/film/${idPerson}`} className="film">
                                <ul className="film__lists">
                                    <li className="film__lists-list"><img className="film__lists-img" src={urlImage + `${index + 1}` + ".jpg"} alt=""/></li>
                                    <li className="film__lists-list">
                                        <span className="film__lists-list-title">{title}</span>
                                    </li>
                                </ul>
                            </Link>)
                    }
                )}
            </div>
        </div>
    );
};

export default FilmsComponent;