import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./favorite.style.css";

const FavoriteComponent = () => {

    return (
        <div className="favoritePeople">
            {/*{favorite && favorite.map((item) => {*/}
            {/*    return (*/}
            {/*        <ul className="favorite__lists">*/}
            {/*            <li className="favorite__lists-list"><img src={item[1]} alt=""/></li>*/}
            {/*            <li className="favorite__lists-list"><span>Name:</span>{item[0]}</li>*/}
            {/*            <li onClick={() => removeFavorite(item[2])} className="favorite__lists-list"><span className="favorite__lists-list-btn">&#215;</span>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    );
};

export default FavoriteComponent;