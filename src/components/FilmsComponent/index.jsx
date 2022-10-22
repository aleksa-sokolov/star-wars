import React, { useEffect, useState } from 'react';
import './films.style.css';
import { Link } from 'react-router-dom';
import SkeletonCard from '../elements/Skeleton/SkeletonCard';
import {
  getIdCharactersFromFilms,
  getDataFromApi,
} from '../../utils/additionalUtils';

const FilmsComponent = () => {
  const [films, setFilms] = useState();
  useEffect(() => {
    getDataFromApi('https://swapi.dev/api/films').then((res) => {
      const films = res.results.map(
        ({ created, director, episode_id, release_date, title, url }) => {
          return {
            created,
            director,
            episode_id,
            release_date,
            title,
            url,
          };
        }
      );
      setFilms(films);
    });
  }, []);
  let urlImage = 'https://starwars-visualguide.com/assets/img/films/';
  return (
    <div className="films">
      <div className="films__wrapper">
        {!films && <SkeletonCard />}
        {films &&
          films.map(({ title, id, url }, index) => {
            let idPerson = getIdCharactersFromFilms(url);
            return (
              <Link key={index} to={`/film/${idPerson}`} className="film">
                <ul className="film__lists">
                  <li className="film__lists-list">
                    <img
                      className="film__lists-img"
                      src={urlImage + `${index + 1}` + '.jpg'}
                      alt=""
                    />
                  </li>
                  <li className="film__lists-list">
                    <span className="film__lists-list-title">{title}</span>
                  </li>
                </ul>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default FilmsComponent;
