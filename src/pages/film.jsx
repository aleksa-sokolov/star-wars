import React from 'react';
import FilmComponent from "../components/FilmComponent";
import {useParams} from "react-router-dom";

const Film = () => {
    const idFilm = useParams();
    const urlImage = `https://starwars-visualguide.com/assets/img/films/${idFilm.id}` + ".jpg";
    return (
        <>
            <FilmComponent id={idFilm} img={urlImage}/>
        </>
    );
};

export default Film;