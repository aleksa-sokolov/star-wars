import React from "react";
import { Link } from "react-router-dom";
import "./category.style.css";
import imgFilms from "../../../images/films.jpg";
import imgCharacters from "../../../images/characters.jpg";

const Category = () => {
  return (
    <div className="categories">
      <Link to="/films" className="category">
        <p className="category__title">Films</p>
        <img src={imgFilms} alt="Films" className="category__img" />
      </Link>
      <Link to="/characters" className="category">
        <p className="category__title">Characters</p>
        <img src={imgCharacters} alt="" className="category__img" />
      </Link>
    </div>
  );
};

export default Category;
