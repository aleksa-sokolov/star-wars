import React, { useEffect, useState } from 'react';
import { getApiStarWars } from '../../utils/getApiStarWars';
import './peoplecomponent.style.css';
import { Link } from 'react-router-dom';
import SkeletonCard from '../elements/Skeleton/SkeletonCard';
import { getIdICharacters, getDataFromApi } from '../../utils/additionalUtils';

const PeoplesComponent = () => {
  let urlImage = 'https://starwars-visualguide.com/assets/img/characters/';
  const [peoples, setPeoples] = useState();
  const [page, setPage] = useState(1);

  function getNextPage(count) {
    if (page === 10) {
      setPage((count -= 1));
    }
    localStorage.setItem('page', count);
    setPage((count += 1));
  }

  function getPrevPage(count) {
    if (count <= 1) {
      setPage((count += 1));
    }
    localStorage.setItem('page', count);
    setPage((count -= 1));
  }

  useEffect(() => {
    getDataFromApi(
      `https://swapi.dev/api/people/?page=${localStorage.getItem('page')}`
    ).then((res) => {
      const collectionOfPeoples = res.results.map(({ name, url }) => {
        return {
          name,
          url,
        };
      });
      localStorage.setItem('page', '1');
      setPeoples(collectionOfPeoples);
    });
  }, [page]);

  return (
    <div className="characters">
      <div className="character">
        {!peoples && <SkeletonCard />}
        {peoples &&
          peoples.map(({ name, url }) => {
            let idCharacter = getIdICharacters(url);
            return (
              <Link key={name} to={`/person-character/${idCharacter}`}>
                <ul className="character__lists">
                  <li className="character__lists-list">{name}</li>
                  <li className="character__lists-list">
                    <img
                      className="character__lists-img"
                      src={urlImage + `${idCharacter}` + '.jpg'}
                      alt=""
                    />
                  </li>
                </ul>
              </Link>
            );
          })}
      </div>
      <div className="character__buttons">
        {page === 1 ? (
          ''
        ) : (
          <button className="character__btn" onClick={() => getPrevPage(page)}>
            Prev
          </button>
        )}
        {page === 10 ? (
          ''
        ) : (
          <button className="character__btn" onClick={() => getNextPage(page)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PeoplesComponent;
