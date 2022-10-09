import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './favorite.style.css';
import { removeFavoritePeople } from '../../redux/slice/swappiSlice';
import img from '../../images/empty.png';
import { getIdICharacters } from '../../utils/additionalUtils';

const FavoriteComponent = () => {
  const dispatch = useDispatch();
  const peoples = useSelector((state) => state.swappi.favoriteCollection);
  function deleteFavoritePeople(people) {
    dispatch(removeFavoritePeople(people));
  }
  return (
    <div className="favoritePeople">
      {!peoples.length <= 0 ? (
        peoples.map((people) => {
          const id = getIdICharacters(people.url);
          const urlImage =
            `https://starwars-visualguide.com/assets/img/characters/${id}` +
            '.jpg';
          return (
            <ul className="favorite__lists">
              <li className="favorite__lists-list">
                <img src={urlImage} alt="" />
              </li>
              <li className="favorite__lists-list">
                <span>Name:</span>
                {people.name}
              </li>
              <li
                onClick={() => deleteFavoritePeople(people)}
                className="favorite__lists-list"
              >
                <span className="favorite__lists-list-btn">&#215;</span>
              </li>
            </ul>
          );
        })
      ) : (
        <div className="favorite__empty">
          <p className="favorite__empty-title">
            You haven't added your favorite character to favorites yet
          </p>
          <img className="favorite__empty-img" src={img} alt="fsdfsd" />
        </div>
      )}
    </div>
  );
};

export default FavoriteComponent;
