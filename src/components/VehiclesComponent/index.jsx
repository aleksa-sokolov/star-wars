import React from 'react';
import {useState, useEffect} from "react";
import {getApiStarWars} from "../../utils/getApiStarWars";
import "../PeoplesComponent/peoplecomponent.style.css";

const VehiclesComponent = () => {
    const [vehicles, setVehicles] = useState();

    const getVehicles = async (url) => {
        const res = await getApiStarWars(url);
        const getVehicle = res.results.map(({name, url}) => {
            return {
                name, url
            }
        });
        setVehicles(getVehicle);
    }


    useEffect(() => {
        getVehicles("https://swapi.dev/api/vehicles");
    }, []);


    let urlImage = "https://starwars-visualguide.com/assets/img/vehicles/";

    return (<div className="characters">
        <div className="character">
            {vehicles && vehicles.map(({name}, index) => {
                return (
                    <ul className="character__lists">
                        <li className="character__lists-list">{name}</li>
                        <li className="character__lists-list"><img className="character__lists-img"
                                                                   src={urlImage + `${index + 1}` + ".jpg"} alt=""/>
                        </li>
                    </ul>
                )
            })}
        </div>
    </div>);

};

export default VehiclesComponent;