import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "./favorite.style.css";
import {removeFavoritePeople} from "../../redux/slice/swappiSlice";
import img from "../../images/empty.png";

const FavoriteComponent = () => {
    const dispatch = useDispatch();
    const people = useSelector((state) => state.swappi.favoriteCollection);

    function getIdICharacters(url) {
        return url
            .replace("https://swapi.dev/api/people", "")
            .replace(/[^0-9]/g, "");
    }

    function deleteFavoritePeople(people) {
        dispatch(removeFavoritePeople(people));
    }

    return (
        <div className="favoritePeople">
            {!people.length <= 0 ? (
                people.map((people) => {
                    const id = getIdICharacters(people.url);
                    const urlImage =
                        `https://starwars-visualguide.com/assets/img/characters/${id}` +
                        ".jpg";
                    return (
                        <ul className="favorite__lists">
                            <li className="favorite__lists-list">
                                <img src={urlImage} alt=""/>
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
                    <
                    <
                    <
                    <
                    <
                    << HEAD
                    <img className="favorite__empty-img" src={img} alt=""/>
                        =======
                    <img className="favorite__empty-img" src={img} alt="fsdfsd"/>
                        >>>>>>> 5c0694d3a8b6162893e76602ab3dd24ae3521e21
                </div>
            )}
        </div>
    );
};

export default FavoriteComponent;
