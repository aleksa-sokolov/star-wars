import React from 'react';
import { Link } from 'react-router-dom';
import './category.style.css';
import imgFilms from '../../images/films.jpg';
import imgCharacters from '../../images/characters.jpg';
import imgStarships from '../../images/starships.jpg';
import imgVehicles from '../../images/vehicles.jpg';
import imgPlanets from '../../images/planets.png';

const Category = () => {
  console.log('category');
  return (
    <div className="categories">
      <Link to="/films" className="category">
        <p className="category__title">Films</p>
        <img src={imgFilms} alt="" className="category__img" />
      </Link>
      <Link to="/characters" className="category">
        <p className="category__title">Characters</p>
        <img src={imgCharacters} alt="" className="category__img" />
      </Link>
      <Link to="/starships" className="category">
        <p className="category__title">Starships</p>
        <img src={imgStarships} alt="" className="category__img" />
      </Link>
      <Link to="/vehicles" className="category">
        <p className="category__title">Vehicles</p>
        <img src={imgVehicles} alt="" className="category__img" />
      </Link>
      <Link to="/planets" className="category">
        <p className="category__title">Planets</p>
        <img src={imgPlanets} alt="" className="category__img" />
      </Link>
    </div>
  );
};

export default Category;
