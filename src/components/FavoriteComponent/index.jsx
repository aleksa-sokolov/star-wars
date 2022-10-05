import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./favorite.style.css";
import {removeFavoritePeople} from "../../redux/slice/swappiSlice";

const FavoriteComponent = () => {
    const dispatch = useDispatch();
    const people = useSelector(state => state.swappi.favoriteCollection);

    function getIdICharacters(url) {
        return url.replace("https://swapi.dev/api/people", "").replace(/[^0-9]/g, "");
    }


    function deleteFavoritePeople(people) {
        dispatch(removeFavoritePeople(people));
    }


    return (
        <div className="favoritePeople">
            {people ? people.map((people) => {
                const id = getIdICharacters(people.url);
                const urlImage = `https://starwars-visualguide.com/assets/img/characters/${id}` + ".jpg";
                return (
                    <ul className="favorite__lists">
                        <li className="favorite__lists-list"><img src={urlImage} alt=""/></li>
                        <li className="favorite__lists-list"><span>Name:</span>{people.name}</li>
                        <li onClick={() => deleteFavoritePeople(people)} className="favorite__lists-list"><span
                            className="favorite__lists-list-btn">&#215;</span>
                        </li>
                    </ul>
                )
            }) : <div>fgfh</div>}
        </div>
    );
};

export default FavoriteComponent;