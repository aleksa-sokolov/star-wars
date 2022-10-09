import React, { useEffect, useState } from 'react';
import { getDataFromApi } from '../../utils/additionalUtils';
import './film.style.css';
import { Link } from 'react-router-dom';

const FilmComponent = ({ id, img }) => {
  const [film, setFilm] = useState();

  useEffect(() => {
    getDataFromApi(`https://swapi.dev/api/films/${id.id}/`).then((res) => {
      setFilm(res);
    });
  }, []);

  return (
    <div className="people__wrap">
      <img className="people__img" src={img} alt="" />
      <Link className="people__close" to="/films">
        &#215;
      </Link>
      <ul className="people__lists">
        <li className="people__list">
          <span>Title: </span>
          {film && film.title}
        </li>
        <li className="people__list">
          <span>Director: </span>
          {film && film.director}
        </li>
        <li className="people__list">
          <span>Producer: </span>
          {film && film.producer}
        </li>
        <li className="people__list">
          <span>Opening_crawl: </span>
          {film && film.opening_crawl}
        </li>
      </ul>
    </div>
  );
};

export default FilmComponent;
