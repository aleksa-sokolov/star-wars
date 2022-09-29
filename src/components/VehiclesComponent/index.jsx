import React from 'react';
import {useState,useEffect} from "react";
import {getApiStarWars} from "../../utils/getApiStarWars";
import "../PeoplesComponent/peoplecomponent.style.css";

const VehiclesComponent = () => {
    const [starships, setStarships] = useState();

    const getStarships = async (url) => {
        const res = await getApiStarWars(url);
        const getStarship = res.results.map(({name, url}) => {
            return {
                name, url
            }
        });
        setStarships(getStarship);
    }


    useEffect(() => {
        getStarships("https://swapi.dev/api/starships");
    }, []);


    let urlImage = "https://starwars-visualguide.com/assets/img/starships/";

    return (<div className="characters">
        <div className="character">
            {starships && starships.map(({name}, index) => {
                return (
                    <ul className="character__lists">
                        <li className="character__lists-list">{name}</li>
                        <li className="character__lists-list"><img className="character__lists-img" src={urlImage + `${index + 1}` + ".jpg"} alt=""/>
                        </li>
                    </ul>
                )
            })}
        </div>
    </div>);


    return (
        <div>

        </div>
    );
};

export default StarshipsComponent;